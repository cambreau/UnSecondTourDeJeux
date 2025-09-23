import { useState, useEffect } from "react";
// CSS
import "./BtnPanier.css";
// Images
import logoPanier from "@assets/images/ajout-panier-logo.svg";
import poubellePanier from "@assets/images/poubelle.svg";

function BtnPanier({ produit, gestionPanierProduit }) {
  return (
    <button
      className="BtnPanier"
      onClick={() => {
        gestionPanierProduit(produit);
      }}
    >
      <img
        src={produit.statut ? poubellePanier : logoPanier}
        alt="Icon d'un panier"
      ></img>
    </button>
  );
}

export default BtnPanier;
