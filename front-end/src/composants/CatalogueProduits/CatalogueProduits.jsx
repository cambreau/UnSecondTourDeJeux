import { useState, useEffect } from "react";

// CSS
import "./CatalogueProduits.css";
// Composants
import BanniereCatalogue from "./BanniereCatalogue/BanniereCatalogue";
import FiltresProduits from "./FiltresProduits/FiltresProduits";
import CarteProduit from "../compostants-partages/CarteProduit/CarteProduit";

function CatalogueProduits({ gestionPanierProduit, produits }) {
  // --------------------------- useStateFiltre
  let [filtreActuel, setFiltreActuel] = useState("tous");

  /**
   * Fonction qui filtre l'array de produits en fonction de la categorie.
   * @param {Array} produits
   * @param {String} filtre
   * @returns array filtré
   */
  const filtrerProduits = (produits, filtre) => {
    if (filtre === "tous") {
      return produits;
    }
    return produits.filter((produit) => produit.categorie == filtre);
  };

  const produitsFiltres = filtrerProduits(produits, filtreActuel);

  return (
    <section>
      <BanniereCatalogue />
      <h2 className="CatalogueProduits__titre">Découvrez nos produits</h2>
      <div class="CatalogueProduits__contenu">
        <FiltresProduits
          filtreActuel={filtreActuel}
          setFiltreActuel={setFiltreActuel}
        />
        <div className="CatalogueProduits__produits">
          {produitsFiltres.map((produitfiltre, index) => (
            <CarteProduit
              key={index}
              produit={produitfiltre}
              gestionPanierProduit={gestionPanierProduit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CatalogueProduits;
