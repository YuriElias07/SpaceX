import { useState } from "react";
import type { LaunchData, LaunchResponse } from "../../types/TableTypes";
import { gql } from "urql";
import { urqlClient } from "../../lib/urqlClient";

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches {
      id
      mission_name
      launch_date_utc
      launch_year
      rocket {
        rocket_name
      }
      launch_site {
        site_name_long
      }
      launch_success
    }
  }
`;

export const HomeViewModel = () => {
  const [launches, setLaunches] = useState<LaunchData[]>([]);
  const [newYear, setNewYear] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchLaunches = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      if (!/^\d{4}$/.test(newYear)) {
        throw new Error("Informe um ano válido (YYYY).");
      }

      console.log("Enviando query com year:", newYear);

      const result = await urqlClient
        .query(
          GET_LAUNCHES,
          { year: newYear },
          { requestPolicy: "network-only" }
        )
        .toPromise();

      if (result.error) throw result.error;

      console.log("Resultado recebido:", result.data);

      // Filtro do ano pelo launch_year
      const filtered = result.data.launches.filter(
        (launch: LaunchResponse) => launch.launch_year === newYear
      );

      const mapped: LaunchData[] = (filtered ?? []).map(
        (launch: LaunchResponse) => ({
          id: launch.id,
          mission: launch.mission_name,
          rocket: launch.rocket?.rocket_name,
          launchSite: launch.launch_site?.site_name_long,
          date: launch.launch_date_utc,
          success: launch.launch_success,
        })
      );
      setLaunches(mapped);
    } catch (error) {
      if (error === 404) {
        setErrorMsg("Nenhum lançamento encontrado para o ano informado.");
      }
      if (error === 500) {
        setErrorMsg("Erro no servidor. Tente novamente mais tarde.");
      } else {
        setErrorMsg((error as Error).message || "Erro ao buscar lançamentos.");
      }
      console.error("Erro ao buscar lançamentos:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    launches,
    newYear,
    loading,
    errorMsg,
    setNewYear,
    fetchLaunches,
  };
};
