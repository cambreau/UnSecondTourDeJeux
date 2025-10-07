// CSS
import "./Formulaire.css";

function Formulaire({
  titreFormulaire,
  method,
  action = null,
  enfants,
  bouton,
}) {
  return (
    <section className="Formulaire">
      <h2 className="Formulaire-titre">{titreFormulaire}</h2>
      <form method={method} action={action}>
        {enfants}
        {bouton}
      </form>
    </section>
  );
}

export default Formulaire;
