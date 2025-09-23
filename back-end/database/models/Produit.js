import JSONArrayDatabase from "../JSONArrayDatabase.js";
const dbProduit = new JSONArrayDatabase("produits.json");

export default class Produit {
  /**
   * Fonction asynchrone et static  qui creer un nouveau produit..
   *
   * Vérifie que tous les champs requis soient présents avant d'ajouter le produit.
   * @param {Object} produitData - Les données du produit à créer.
   * @returns {Promise<Object>} Le produit créé.
   * */
  static async creerProduit(produitData) {
    if (!produitData.titre) {
      throw new Error("Le titre est obligatoire");
    }
    if (!produitData.age) {
      throw new Error("La tranche d'age est obligatoire");
    }
    if (!produitData.etat) {
      throw new Error("L'etat est obligatoire");
    }
    if (!produitData.prix) {
      throw new Error("Le prix est obligatoire");
    }
    if (!produitData.categorie) {
      throw new Error("La categorie est obligatoire");
    }
    if (!produitData.description) {
      throw new Error("La description est obligatoire");
    }
    return dbProduit.ajout(produitData);
  }

  /**
   * Fonction asynchrone et static qui recherche un produit par son identifiant.
   *
   * @param {string} id - L'identifiant udu produit à rechercher.
   * @returns {Promise<Object|null>} Le produit correspondant si trouvé, sinon `null`.
   */
  static async trouverParIdUnProduit(id) {
    return dbProduit.trouverParID(id);
  }

  /** Fonction asynchrone et static qui recupere tous les produits existants
   *  @returns {Promise<Object|null>} Tous les produits.
   */
  static async trouverTous() {
    return dbProduit.trouverTous();
  }

  /**
   * Fonction asynchrone et static met à jour un produit.
   *
   * Vérifie si le produit existe, sinon lance une erreur.
   * Fait les modifications et met à jour la date de modification.
   *
   * @param {string} id - L'identifiant unique du produit à mettre à jour.
   * @param {Object} changement - Les propriétés à modifier dans le produit.
   * @throws {Error} Lance une erreur si le produit n'est pas trouvé.
   * @returns {Promise<Object>} Le produit mis à jour.
   */
  static async mettreAJourUnProduit(id, changement) {
    const produitExistant = await dbProduit.trouverParID(id);
    if (!produitExistant) {
      throw new Error("Produit non trouvé");
    }
    const misesAJour = {
      ...produitExistant,
      ...changement,
      dateMiseAJour: new Date().toISOString(),
    };

    return dbProduit.modifie(id, misesAJour);
  }

  /**
   * Supprime un produit de la base de données.
   *
   * @param {string} id - L'identifiant du produit à supprimer.
   * @returns {Promise<Object|null>} Le produit supprimé ou `null` si aucun produit ne correspond à cet identifiant.
   */
  static async supprimerUnProduit(id) {
    return dbProduit.supprime(id);
  }
}
