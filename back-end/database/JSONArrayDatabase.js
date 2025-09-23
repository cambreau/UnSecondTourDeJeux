// ***** Fichier des opérations CRUD (Create, Read, Update, Delete).

import fs from "fs/promises";
import path from "path";
import { v7 as uuidv7 } from "uuid";
import { fileURLToPath } from "url";

//__dirname = chemin absolu du répertoire courant du fichier
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default class JSONArrayDatabase {
  constructor(filename) {
    this.filepath = path.join(__dirname, "../data", filename);
    // __dirname = dossier où se trouve JSONArrayDatabase.js
    // ../data = remonte d’un niveau (sort de /models) → va dans /database
    // Puis ../data = tu vas vers /back-end/data
    // Exemple :
    // new JSONArrayDatabase("utilisateurs.json")
    // /Users/breau/Documents/AEC/Java-Script/Session_2/projet-session3/vite-project/back-end/data/utilisateurs.json
    this.data = [];
    this.initialise();
  }

  /**
   * Fonction asynchrone qui initialise la base de données en chargeant les données depuis le fichier JSON.
   *
   * Cette méthode tente de lire le fichier situé à `this.filepath`.
   * - Si le fichier existe, son contenu JSON est parsé et assigné à `this.data`.
   *  Ref = https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
   * - Si le fichier n'existe pas, il est créé avec un tableau vide (via `this.sauvegarde()`).
   * - En cas d'autre erreur, un message d'erreur est affiché dans la console.
   * @returns {Promise<void>}
   */
  async initialise() {
    try {
      const contenu = await fs.readFile(this.filepath, "utf-8");
      this.data = JSON.parse(contenu);
    } catch (error) {
      if (error.code === "ENOENT") {
        // "ENOENT" = le fichier ou dossier n’a pas été trouvé.
        await this.sauvegarde();
      } else {
        console.error(
          `Erreur lors de l'initialisation de la base de données ${this.filepath}:`,
          error
        );
      }
    }
  }

  /**
   * Fonction asynchrone qui sauvegarde les données présentes dans `this.data` dans le fichier JSON.
   *
   * Convertit `this.data` en chaîne JSON formatée avec une indentation de 2 espaces,
   * Ref = https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
   * puis écrit ce contenu dans le fichier situé à `this.filepath`.
   * En cas d’erreur lors de l’écriture, affiche un message d’erreur dans la console.
   * @returns {Promise<void>}
   */
  async sauvegarde() {
    try {
      await fs.writeFile(
        this.filepath,
        JSON.stringify(this.data, null, 2),
        "utf-8"
      );
    } catch (erreur) {
      console.error(
        `Erreur lors de la sauvegarde de la base de données ${this.filepath}:`,
        erreur
      );
    }
  }

  /**
   * Fonction asynchrone qui ajoute un nouvel élément à la base de données.
   *
   * Créer un nouvel objet en copiant les propriétés de `element`,
   * puis lui ajoute un identifiant unique (`id`), une date de création (`dateCreation`)
   * et une date de mise à jour (`dateMiseAJour`).
   * Le nouvel élément est ensuite ajouté au tableau `this.data`, puis sauvegardé dans le fichier JSON.
   * @param {Object} element - L'objet à ajouter à la base.
   * @returns {Promise<Object>}
   */
  async ajout(element) {
    const nouvelElement = {
      ...element,
      // lib uuid - fonction qui génère un identifiant unique universel (UUID) selon la version 7 du standard UUID.
      id: uuidv7(),
      //
      dateCreation: new Date().toISOString(),
      dateMiseAJour: new Date().toISOString(),
    };
    this.data.push(nouvelElement);
    await this.sauvegarde();
    return nouvelElement;
  }

  /**
   * Fonction asynchrone qui modifie un élément identifié par son `id` avec les données fournies dans `misesAJour`.
   *
   * Recherche l’élément dans `this.data`, met à jour ses propriétés avec celles de `misesAJour`,
   * sauvegarde les modifications dans le fichier JSON, puis retourne l’élément modifié.
   * @param {string} id - L'identifiant unique de l'élément à modifier.
   * @param {Object} misesAJour - Un objet contenant les propriétés à mettre à jour.
   * @returns {Promise<Object|null>} L’élément modifié ou `null` si aucun élément avec cet `id` n’a été trouvé.
   */
  async modifie(id, misesAJour) {
    const index = this.data.findIndex((element) => element.id == id);
    if (index !== -1) {
      this.data[index] = { ...this.data[index], ...misesAJour };
      await this.sauvegarde();
      return this.data[index];
    }
    return null;
  }

  /**
   * Fonction asynchrone qui supprime un élément identifié par son `id` de la base de données.
   *
   * Recherche l’élément dans `this.data`, le retire du tableau,
   * sauvegarde les modifications dans le fichier JSON, puis retourne l’élément supprimé.
   * @param {string} id - L'identifiant unique de l'élément à supprimer.
   * @returns {Promise<Object|null>} L’élément supprimé ou `null` si aucun élément avec cet `id` n’a été trouvé.
   */
  async supprime(id) {
    const index = this.data.findIndex((element) => element.id == id);
    if (index !== -1) {
      const supprime = this.data.splice(index, 1)[0];
      await this.sauvegarde();
      return supprime;
    }
    return null;
  }

  /**
   * Fonction asynchrone qui recherche un élément dans la base de données par son `id`.
   *
   * Retourne l’élément correspondant si trouvé, sinon `null`.
   * @param {string} id - L'identifiant unique de l'élément à rechercher.
   * @returns {Promise<Object|null>} L’élément trouvé ou `null` si aucun élément ne correspond.
   */
  async trouverParID(id) {
    return this.data.find((element) => element.id == id) || null;
  }

  /**
   * Fonction asynchrone qui recherche un élément dans la base de données par son adresse email.
   *
   * Retourne l’élément correspondant si trouvé, sinon `null`.
   * @param {string} email - L'adresse email de l'élément à rechercher.
   * @returns {Promise<Object|null>} L’élément trouvé ou `null` si aucun élément ne correspond.
   */
  async trouverParEmail(email) {
    return this.data.find((element) => element.email === email) || null;
  }

  /** Fonction asynchrone qui recherche tous les éléments.
   *
   * @returns {Promise<Object|null>} un array des éléments trouvés .
   */
  async trouverTous() {
    return [...this.data];
  }
}
