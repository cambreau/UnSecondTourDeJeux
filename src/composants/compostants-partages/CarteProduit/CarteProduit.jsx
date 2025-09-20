// CSS
import "./CarteProduit.css";
// Utils
import { formatteStringSansAccentEtEspace } from "../../../utils/formatters";
// Images
import logoPanier from "@assets/images/ajout-panier-logo.svg";

function CarteProduit({ produit }) {
  return (
    <section className="CarteProduit" data-id={produit.id}>
      <h3 className="CarteProduit__titre">{produit.nom}</h3>
      <picture className="CarteProduit__image">
        <img
          src={`/public/produits/${formatteStringSansAccentEtEspace(
            produit.nom
          )}.jpg`}
          alt={produit.nom}
        />
      </picture>
      <div className="CarteProduit__description">
        <p>Age : {produit.age}</p>
        <p>Etat : {produit.etat}</p>
        <p>Prix : {produit.prix}</p>
      </div>
      <button className="CarteProduit__btnPanier" date-id={produit.id}>
        <img src={logoPanier} alt="Icon d'un panier"></img>
      </button>
    </section>
  );
}

export default CarteProduit;
