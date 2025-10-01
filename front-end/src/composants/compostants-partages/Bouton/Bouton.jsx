// CSS
import "./Bouton.css";

function Bouton({ texte, className, type, lienAction }) {
  if (type === "button") {
    return (
      <button className={className} onClick={lienAction}>
        {texte}
      </button>
    );
  } else if (type === "lien") {
    return (
      <a className={className} href={lienAction}>
        {texte}
      </a>
    );
  }
}

export default Bouton;
