// CSS
import "./LogoTitre.css";
// Impor image
import logo from "@assets/logo/logo.svg";

function LogoTitre() {
  return (
    <a className="LogoTitre" href="/">
      <picture className="LogoTitre__logo">
        <img src={logo} alt="Logo carrousel du site un second tour de jeux" />
      </picture>
      <h1 className="LogoTitre__titre">Un second tour de jeux</h1>
    </a>
  );
}

export default LogoTitre;
