// routes.js
import express from "express";

import produitRoutes from "./produits.routes.js";

const router = express.Router();

// Definition des routes
router.get("/", (req, res) => {
  res.end("Server marche");
});

router.use("/produits", produitRoutes);

export default router;
