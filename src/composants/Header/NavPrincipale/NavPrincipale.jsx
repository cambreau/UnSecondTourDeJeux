// CSS
import "./NavPrincipale.css";

function NavPrincipale() {
  return (
    <nav className="NavPrincipale">
      <ul className="NavPrincipale__items">
        <li className="NavPrincipale__item">
          <a className="NavPrincipale__item__lien" href="/">
            Accueil
          </a>
        </li>
        <li>
          <a className="NavPrincipale__item__lien" href="/catalogue-produits">
            Catalogue Produits
          </a>
        </li>
        <li>
          <a className="NavPrincipale__item__lien" href="./contact">
            Nous contacter
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavPrincipale;
