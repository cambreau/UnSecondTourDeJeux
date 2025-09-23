// CSS
import "./NavPrincipale.css";
//Import images
import panier from "@assets/images/mon-panier.png";
// import Link
import { NavLink } from "react-router-dom"; //NavLink vs Link = NavLink met une classe active sur le lien actif.

function NavPrincipale() {
  return (
    <nav className="NavPrincipale">
      <NavLink to={"/"}>Accueil</NavLink>
      <NavLink to={"/catalogue-produits"}>Catalogue Produits</NavLink>
      <NavLink to={"/contact"}>Nous contacter</NavLink>
      <NavLink to={"/mon-panier"}>
        <img src={panier} alt="Icon panier"></img>
      </NavLink>
    </nav>
  );
}

export default NavPrincipale;
