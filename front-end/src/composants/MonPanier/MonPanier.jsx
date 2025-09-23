// CSS
import "./MonPanier.css";

//Composants
import LignePanier from "./LignePanier/LignePanier";

function MonPanier({ panier, gestionPanierProduit }) {
  return (
    <section className="MonPanier">
      <h2 className="MonPanier__titre">Mon Panier</h2>
      <div className="MonPanier__liste-produits">
        {panier.map((produit, index) => (
          <LignePanier
            produit={produit}
            gestionPanierProduit={gestionPanierProduit}
          />
        ))}
      </div>
    </section>
  );
}

export default MonPanier;
