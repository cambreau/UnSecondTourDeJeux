// CSS
import "./Formulaire.css";

function Formulaire(titreFormulaire, method, action = null) {
  return (
    <section>
      <h2>{titreFormulaire}</h2>
      <form method={method} action={action} className="formulaire"></form>
    </section>
  );
}

export default Formulaire;
