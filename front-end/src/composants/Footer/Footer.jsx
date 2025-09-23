// CSS
import "./Footer.css";
// Composants
import LogoTitre from "../compostants-partages/LogoTitre/LogoTitre";

function Footer() {
  return (
    <footer>
      <LogoTitre />
      <p className="Footer__droits">
        Tous droits réservés - Un second tour de jeux 2025
      </p>
    </footer>
  );
}

export default Footer;
