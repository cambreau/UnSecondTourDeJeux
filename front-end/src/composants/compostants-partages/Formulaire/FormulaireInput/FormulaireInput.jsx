// CSS
import "./FormulaireInput.css";
// Utils
import { formatteStringSansAccentEtEspace } from "../../../../utils/formatters";

function FormulaireInput({
  type,
  nom,
  genre,
  estObligatoire,
  onChange,
  value = "",
}) {
  return (
    <div className="FormulaireInput">
      <label htmlFor={formatteStringSansAccentEtEspace(nom)}>{nom} :</label>
      <input
        type={type}
        name={formatteStringSansAccentEtEspace(nom)}
        id={formatteStringSansAccentEtEspace(nom)}
        {...(estObligatoire ? { required: true } : {})}
        placeholder={`Entrez ${genre} ${nom.toLowerCase()}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormulaireInput;
