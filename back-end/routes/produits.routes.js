import express from "express";
const router = express.Router();

import {
  creerProduit,
  obtenirUnProduit,
  mettreAJourUnProduit,
  supprimerUnProduit,
  obtenirTousProduits,
} from "../controllers/produit.controllers.js";

// GET / - Créer un produit
router.get("/", obtenirTousProduits);

// POST / - Créer un produit
router.post("/", creerProduit);

// GET /produits/:id - Obtenir un produit
router.get("/:id", obtenirUnProduit);

// PUT /produits/:id - Mettre à jour un produit
router.put("/:id", mettreAJourUnProduit);

// DELETE /products/:id - Supprimer un produit
router.delete("/:id", supprimerUnProduit);

export default router;
