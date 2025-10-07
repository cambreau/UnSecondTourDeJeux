// CSS
import "./FormulaireTextarea.css";
// Utils
import { formatteStringSansAccentEtEspace } from "../../../../utils/formatters";

function FormulaireTextarea({
  nom,
  genre,
  estObligatoire,
  defaultValue = null,
}) {
  return (
    <div className="FormulaireTextarea">
      <label htmlFor={formatteStringSansAccentEtEspace(nom)}>{nom} :</label>
      <textarea
        id={formatteStringSansAccentEtEspace(nom)}
        name={formatteStringSansAccentEtEspace(nom)}
        rows={4}
        minLength={10}
        placeholder={`Entrez ${genre} ${nom.toLowerCase()}`}
        {...(estObligatoire ? { required: true } : {})}
        {...(defaultValue ? { value: defaultValue } : "")}
      ></textarea>
    </div>
  );
}

export default FormulaireTextarea;
