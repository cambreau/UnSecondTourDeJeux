// CSS
import "./MonPanier.css";

//Composants
import LignePanier from "./LignePanier/LignePanier";
import TotalPrix from "./TotalPrix/TotalPrix";

function MonPanier({ panier, gestionPanierProduit, produits }) {
  return (
    <section className="MonPanier">
      <h2 className="MonPanier__titre">Mon Panier</h2>
      <div className="MonPanier__liste-produits">
        {panier.length === 0 && <p>Aucun article</p>}
        {panier.map((produit, index) => (
          <LignePanier
            produit={produit}
            gestionPanierProduit={gestionPanierProduit}
            panier={panier}
            produits={produits}
          />
        ))}
      </div>
      <TotalPrix panier={panier} />
    </section>
  );
}

export default MonPanier;
