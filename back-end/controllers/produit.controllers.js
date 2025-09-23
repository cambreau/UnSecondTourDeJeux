import Produit from "../database/models/Produit.js";

/**
 * Fonction asynchrone qui crée un nouveau produit.
 *  - récupère les données dans req.body,
 *  - appelle la méthode creerProduit définie dans le modèle Produit pour créer le produit.
 *
 * @param {req} req : requête HTTP reçue.
 * @param {res} res : réponse HTTP que le serveur nous renvoie.
 * @returns {Promise<void>}
 * @envoie Réponse HTTP :
 * -- Si la création fonctionne = 201 (Ressource créée) avec le produit créé.
 * -- Si erreur = 400 (Requête invalide ou mal formée) avec un message d'erreur.
 */
export const creerProduit = async (req, res) => {
  try {
    const produit = await Produit.creerProduit(req.body);
    res.status(201).json(produit);
  } catch (error) {
    res.status(400).json({ error: error.message }); // Erreur peut venir de la validation, c'est la raison pour laquelle on met 400 et non 500.
  }
};

/**
 * Fonction asynchrone qui récupère un produit par son ID.
 *  - récupère l'id grâce à req.params.id,
 *  - appelle la méthode trouverParId définie dans le modèle Produit pour rechercher le produit.
 *
 * @param {req} req : requête HTTP reçue avec l'id du produit en paramètre.
 * @param {res} res : réponse HTTP que le serveur nous renvoie.
 * @returns {Promise<void>}
 * @envoie Réponse HTTP :
 * -- Si le produit est trouvé = 200 (OK) avec les informations du produit.
 * -- Si le produit n'existe pas = 404 (Ressource non trouvée) avec un message d'erreur.
 * -- Si erreur serveur = 500 (Erreur inattendue) avec le détail de l'erreur.
 */
export const obtenirUnProduit = async (req, res) => {
  try {
    const produit = await Produit.trouverParIdUnProduit(req.params.id);
    if (!produit) {
      return res.status(404).json({ error: "Produit non trouvé" });
    }
    res.json(produit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenirTousProduits = async (req, res) => {
  try {
    const produits = await Produit.trouverTous();
    res.json(produits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Fonction asynchrone qui met à jour un produit.
 *  - récupère l'id grâce à req.params.id,
 *  - récupère les données de mise à jour dans req.body,
 *  - appelle la méthode mettreAJour définie dans le modèle Produit pour modifier le produit.
 *
 * @param {req} req : requête HTTP reçue avec l'id du produit en paramètre.
 * @param {res} res : réponse HTTP que le serveur nous renvoie.
 * @returns {Promise<void>}
 * @envoie Réponse HTTP :
 * -- Si la modification fonctionne = 200 (OK) avec les nouvelles informations du produit.
 * -- Si le produit n'existe pas = 404 (Ressource non trouvée) avec un message d'erreur.
 * -- Si erreur = 400 (Requête invalide ou mal formée) avec un message d'erreur.
 */
export const mettreAJourUnProduit = async (req, res) => {
  try {
    const produit = await Produit.mettreAJourUnProduit(req.params.id, req.body);
    if (!produit) {
      return res.status(404).json({ error: "Produit non trouvé" });
    }
    res.json(produit);
  } catch (error) {
    res.status(400).json({ error: error.message }); // Erreur peut venir de la validation, c'est la raison pour laquelle on met 400 et non 500.
  }
};

/**
 * Fonction asynchrone qui supprime un produit.
 *  - récupère l'id grâce à req.params.id,
 *  - appelle la méthode supprimerUnProduit définie dans le modèle Produit pour supprimer le produit.
 *
 * @param {req} req : requête HTTP reçue avec l'id du produit en paramètre.
 * @param {res} res : réponse HTTP que le serveur nous renvoie.
 * @returns {Promise<void>}
 * @envoie Réponse HTTP :
 * -- Si la suppression fonctionne = 200 (OK) avec un message de succès.
 * -- Si le produit n'existe pas = 404 (Ressource non trouvée) avec un message d'erreur.
 * -- Si erreur serveur = 500 (Erreur inattendue) avec le détail de l'erreur.
 */
export const supprimerUnProduit = async (req, res) => {
  try {
    await Produit.supprimerUnProduit(req.params.id);
    res.json({ message: "Produit supprimé" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
