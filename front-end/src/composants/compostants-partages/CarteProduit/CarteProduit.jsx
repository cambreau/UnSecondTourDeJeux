// CSS
import "./CarteProduit.css";
// Utils
import { formatteStringSansAccentEtEspace } from "../../../utils/formatters";
// Composants
import BtnPanier from "./BtnPanier/BtnPanier";

function CarteProduit({ produit, gestionPanierProduit }) {
  return (
    <section className="CarteProduit" data-id={produit.id}>
      <picture className="CarteProduit__image">
        <img
          src={`/public/produits/${formatteStringSansAccentEtEspace(
            produit.nom
          )}.jpg`}
          alt={produit.nom}
        />
      </picture>
      <h3 className="CarteProduit__titre">{produit.nom}</h3>
      <div className="CarteProduit__description">
        <p>Age : {produit.age}</p>
        <p>Etat : {produit.etat}</p>
        <p>Prix : {produit.prix}$</p>
      </div>
      <BtnPanier
        produit={produit}
        gestionPanierProduit={gestionPanierProduit}
      />
    </section>
  );
}

export default CarteProduit;
