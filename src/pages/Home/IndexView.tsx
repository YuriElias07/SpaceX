import Option from "../../components/Options";
import { TableView } from "../../components/Table";
import { HomeViewModel } from "./Index.view.model";

export const HomeView = () => {
  const HomeVM = HomeViewModel();

  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Buscador de Lançamentos da SpaceX</h1>

      <Option
        home={HomeVM.newYear}
        onYearChange={HomeVM.setNewYear}
        onSearch={HomeVM.fetchLaunches}
        // renderiando de 2006 ate 2025 com loop
        date={(() => {
          const options = [];
          for (let year = 2006; year <= new Date().getFullYear(); year++) {
            options.push(year);
          }
          return options;
        })()}
      />

      {HomeVM.loading && <p>Carregando...</p>}
      <TableView launches={HomeVM.launches} />
    </main>
  );
};
