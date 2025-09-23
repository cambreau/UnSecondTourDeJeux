// CSS
import "./LignePanier.css";
// Composants
import BtnPanier from "../../compostants-partages/CarteProduit/BtnPanier/BtnPanier";

function LignePanier({ produit, gestionPanierProduit }) {
  return (
    <section className="LignePanier">
      <h3>{produit.nom}</h3>
      <p className="LignePanier__prix-total-produit">{produit.prix}</p>
      <BtnPanier
        produit={produit}
        gestionPanierProduit={gestionPanierProduit}
      />
    </section>
  );
}

export default LignePanier;
