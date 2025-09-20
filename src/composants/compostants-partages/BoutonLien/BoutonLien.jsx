// CSS
import "./BoutonLien.css";

function BoutonLien({ texte, className, lien }) {
  return (
    <a className={className} href={lien}>
      {texte}
    </a>
  );
}

export default BoutonLien;
