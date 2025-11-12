import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider as UrqlProvider } from "urql";
import { urqlClient } from "./lib/urqlClient.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UrqlProvider value={urqlClient}>
      <App />
    </UrqlProvider>
  </StrictMode>
);
