import { createClient, cacheExchange, fetchExchange } from "urql";

export const urqlClient = createClient({
  url: "https://spacex-production.up.railway.app/graphql", // API pública (SpaceX)
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    method: "POST",
    headers: { "content-type": "application/json" },
  },
});
