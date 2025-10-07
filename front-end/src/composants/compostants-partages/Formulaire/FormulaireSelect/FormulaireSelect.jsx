// CSS
import "./FormulaireSelect.css";
// Utils
import { formatteStringSansAccentEtEspace } from "../../../../utils/formatters";

function FormulaireSelect({
  nom,
  genre,
  estObligatoire,
  arrayOptions,
  value = "",
  onChange,
}) {
  return (
    <div className="FormulaireSelect">
      <label htmlFor={formatteStringSansAccentEtEspace(nom)}>{nom} :</label>
      <select
        id={formatteStringSansAccentEtEspace(nom)}
        name={formatteStringSansAccentEtEspace(nom)}
        {...(estObligatoire ? { required: true } : {})}
        value={value || ""}
        onChange={onChange}
      >
        <option value="" disabled hidden>
          -- Choisir {genre} {nom} --
        </option>
        {arrayOptions.map((option) => (
          <option key={option} value={formatteStringSansAccentEtEspace(option)}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormulaireSelect;
