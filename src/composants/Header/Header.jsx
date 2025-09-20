import "./Header.css";
function Header() {
  return (
    <header>
      <a className="titre-logo" href="./index.html">
        <picture>
          <img src="../../assets/logo/logo.svg" alt="logo" />
        </picture>
        <h1>Un second tour de jeux</h1>
      </a>
      <nav className="nav-principal">
        <ul>
          <li>
            <a href="./index.html">Accueil</a>
          </li>
          <li>
            <a href="./form/form.html">Formulaire</a>
          </li>
          <li>
            <a href="./contact/contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
