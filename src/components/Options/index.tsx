import { HomeViewModel } from "../../pages/Home/Index.view.model";
import type { OptionProps } from "../../types/Options";
import "./style.css";

export const Option = ({ date, home, onYearChange, onSearch }: OptionProps) => {
  const HomeVM = HomeViewModel();

  return (
    <form onSubmit={HomeVM.fetchLaunches} className="containerStyle">
      <select
        className="selectStyle"
        onChange={(e) => onYearChange(e.target.value)}
        value={home}
      >
        <option value="">--Escolha um ano--</option>
        {date.map((year) => (
          <option key={year} value={year.toString()}>
            {year}
          </option>
        ))}
      </select>
      <button className="buttonStyle" onClick={onSearch}>
        Buscar
      </button>
    </form>
  );
};

export default Option;
