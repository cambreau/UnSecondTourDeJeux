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
  // --------------------------- useState Produits
  let [produits, setProduits] = useState([]);
  // useEffect ne peux pas recevoir en parametre une fonction async
  // Récupérer les produits à l'initialisation de la page :
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

  // --------------------------- useState Panier
  // Au lancement de la page : Initialisation du panier vide.
  let [panier, setPanier] = useState([]);

  // Mise a jour dans localStorage à chaque changement -> Utiliser directement, pas besoin de l'appeler.
  // ** Mettre a jour
  useEffect(() => {
    localStorage.setItem("panier", JSON.stringify(panier));
    const panierStocke = localStorage.getItem("panier");
    setPanier(JSON.parse(panierStocke));
  }, [produits]);

  /**
   * Fonction qui ajoute un produit au panier.
   * @param {Object} produit
   */
  const gestionPanierProduit = (
    produit,
    previousStateProduits,
    previousStatePanier
  ) => {
    console.log(previousStateProduits);
    // toggle statut dans la liste
    const i = previousStateProduits.findIndex((p) => p.id === produit.id);
    let newStateProduits = [...previousStateProduits];
    newStateProduits[i].statut = !newStateProduits[i].statut;
    setProduits(newStateProduits);
    console.log(newStateProduits);

    // ajouter/retirer du panier
    const existe = previousStatePanier.some((i) => i.id === produit.id);
    let newStatePanier = existe
      ? previousStatePanier.filter((i) => i.id !== produit.id) // retirer
      : [...previousStatePanier, { ...produit, quantite: 1 }]; // ajouter
    setPanier(newStatePanier);
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
              panier={panier}
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
