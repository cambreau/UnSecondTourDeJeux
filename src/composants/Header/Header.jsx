// CSS
import "./Header.css";
// Composants
import LogoTitre from "../compostants-partages/LogoTitre/LogoTitre";
import NavPrincipale from "./NavPrincipale/NavPrincipale";

function Header() {
  return (
    <header className="Header">
      <LogoTitre />
      <NavPrincipale />
    </header>
  );
}

export default Header;
