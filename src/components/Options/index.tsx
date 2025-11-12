import type { OptionProps } from "../../types/Options";
import "./style.css";

export const Option = ({ date, home, onYearChange, onSearch }: OptionProps) => {
  return (
    <div className="">
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
    </div>
  );
};

export default Option;
