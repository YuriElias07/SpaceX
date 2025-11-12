import React from "react";
import "./style.css";
import type { TableViewProps } from "../../types/TableTypes";
import { formatDate } from "../../utils/formatDate";

export const TableView: React.FC<TableViewProps> = ({ launches }) => {
  if (launches.length === 0) {
    return (
      <p className="no-launches">Nenhum lançamento encontrado para este ano.</p>
    );
  }

  // console.log(launches.map((launch) => launch.success));

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Missão</th>
            <th>Foguete</th>
            <th>Local de lançamento</th>
            <th>Data</th>
            <th>Sucesso?</th>
          </tr>
        </thead>
        <tbody>
          {launches.map((launch) => (
            <tr key={`${launch.id}-${launch.mission}-${launch.date}`}>
              <td>{launch.mission}</td>
              <td>{launch.rocket}</td>
              <td>{launch.launchSite}</td>
              <td>{formatDate(launch.date)}</td>
              <td className="success-cell">
                {launch.success === true
                  ? "✅"
                  : launch.success === false
                  ? "❌"
                  : "❓"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
