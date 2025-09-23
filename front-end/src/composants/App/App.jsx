import { useState, useEffect } from "react";
// CSS
import "./App.css";
// Route
import { Routes, Route } from "react-router-dom";
// Composants
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Accueil from "../Accueil/Accueil";
import CatalogueProduits from "../CatalogueProduits/CatalogueProduits";
import MonPanier from "../MonPanier/MonPanier";
// Backend
import { recupererProduits } from "../../utils/requetes";

function App() {
  // --------------------------- useState Panier
  let [panier, setPanier] = useState(() => {
    try {
      const panierStocke = localStorage.getItem("panier");
      return panierStocke ? JSON.parse(panierStocke) : [];
    } catch {
      return [];
    }
  });

  // Mise a jour dans localStorage à chaque changement -> Utiliser directement, pas besoin de l'appeler.
  useEffect(() => {
    localStorage.setItem("panier", JSON.stringify(panier));
  }, [panier]);

  // --------------------------- useState Produits
  let [produits, setProduits] = useState([]);
  // useEffect ne peux pas recevoir en parametre une fonction async
  // useEffect(async () => {
  //   const repProduit = await recupererProduits();
  //   setProduits(repProduit);
  // }, []); Cette methode n'est pas autorisee.
  // Cette fonction recharge automatiquement la liste des produits depuis une API chaque fois que la valeur de filtreActuel change.
  useEffect(() => {
    const chargerProduits = async () => {
      const repProduit = await recupererProduits();
      const produitAvecStatut = repProduit.map((produit, index) => ({
        ...produit,
        statut: false,
      }));
      setProduits(produitAvecStatut);
    };
    chargerProduits();
  }, []);

  /**
   * Fonction qui ajoute un produit au panier.
   * @param {Object} produit
   */
  const gestionPanierProduit = (produit) => {
    // toggle statut dans la liste
    setProduits((prev) =>
      prev.map((p) => (p.id === produit.id ? { ...p, statut: !p.statut } : p))
    );

    // ajouter/retirer du panier
    setPanier((prev) => {
      const existe = prev.some((i) => i.id === produit.id);
      return existe
        ? prev.filter((i) => i.id !== produit.id) // retirer
        : [...prev, { ...produit, quantite: 1 }]; // ajouter
    });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route
          path="/catalogue-produits"
          element={
            <CatalogueProduits
              gestionPanierProduit={gestionPanierProduit}
              produits={produits}
            />
          }
        ></Route>
        {/* <Route path="/contact" element={<ContactForm />}></Route> */}
        <Route
          path="/mon-panier"
          element={
            <MonPanier
              panier={panier}
              gestionPanierProduit={gestionPanierProduit}
              produits={produits}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
