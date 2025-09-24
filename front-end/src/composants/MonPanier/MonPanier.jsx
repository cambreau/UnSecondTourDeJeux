// CSS
import "./MonPanier.css";

//Composants
import LignePanier from "./LignePanier/LignePanier";

function MonPanier({ panier, gestionPanierProduit, produits }) {
  return (
    <section className="MonPanier">
      <h2 className="MonPanier__titre">Mon Panier</h2>
      <div className="MonPanier__liste-produits">
        {panier.map((produit, index) => (
          <LignePanier
            produit={produit}
            gestionPanierProduit={gestionPanierProduit}
            panier={panier}
            produits={produits}
          />
        ))}
      </div>
    </section>
  );
}

export default MonPanier;
