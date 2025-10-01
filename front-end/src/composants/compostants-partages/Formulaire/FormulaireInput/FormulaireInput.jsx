// CSS
import "./FormulaireInput.css";

function FormulaireInput(type, nom, estObligatoire, regEx = null) {
  return (
    <div className="FormulaireInput">
      <label htmlFor={nom}>{nom}</label>
      <input
        type={type}
        name={nom}
        id={nom}
        {...(regEx ? { pattern: regEx } : {})}
        {...(estObligatoire ? { required } : {})}
      />
    </div>
  );
}

export default FormulaireInput;
