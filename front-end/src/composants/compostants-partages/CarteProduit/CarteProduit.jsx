// CSS
import "./CarteProduit.css";
// Utils
import { formatteStringSansAccentEtEspace } from "../../../utils/formatters";
// Composants
import BtnPanier from "./BtnPanier/BtnPanier";

function CarteProduit({ produits, panier, produit, gestionPanierProduit }) {
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
        <p>
          <span>Age :</span> {produit.age}
        </p>
        <p>
          <span>Etat :</span> {produit.etat}
        </p>
        <p>
          <span>Prix :</span> {produit.prix}$
        </p>
      </div>
      <BtnPanier
        produit={produit}
        gestionPanierProduit={gestionPanierProduit}
        previousStateProduits={produits}
        previousStatePanier={panier}
      />
    </section>
  );
}

export default CarteProduit;
