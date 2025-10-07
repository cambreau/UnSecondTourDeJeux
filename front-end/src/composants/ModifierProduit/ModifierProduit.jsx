// CSS
import "./ModifierProduit.css";
// Composants
import Bouton from "../compostants-partages/Bouton/Bouton";
import Formulaire from "../compostants-partages/Formulaire/Formulaire";
import FormulaireInput from "../compostants-partages/Formulaire/FormulaireInput/FormulaireInput";
import FormulaireSelect from "../compostants-partages/Formulaire/FormulaireSelect/FormulaireSelect";
import FormulaireTextarea from "../compostants-partages/Formulaire/FormulaireTextarea/FormulaireTextarea";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Validator
import { isLength, isNumeric } from "validator";
// Requetes
import { modifierElement, recupererProduit } from "../../utils/requetes";

function ModifierProduit() {
  const { id } = useParams();
  const [produitModif, setProduitModif] = useState({
    id: id,
    nom: "",
    categorie: "",
    age: "",
    etat: "",
    description: "",
    prix: "",
  });

  /**
   * Recuperer les informations cote backend sur le projet au load de la page
   */
  useEffect(() => {
    const chargerProduit = async () => {
      const p = await recupererProduit(id);
      if (p) {
        setProduitModif({
          id: p.id,
          nom: p.nom || "",
          categorie: p.categorie || "",
          age: p.age || "",
          etat: p.etat || "",
          description: p.description || "",
          prix: p.prix || "",
        });
      }
    };
    chargerProduit();
  }, []);

  const [erreurs, setErreurs] = useState({ nom: "", description: "" });

  /**
   * Fonction qui gere la soumission du formulaire.
   * @param {Event} evenement
   */
  const soummettreModif = (evenement) => {
    evenement.preventDefault();
    modifierProduit(produitModif);
  };

  /**
   * Fonction fait la modification au backend
   * @param {Objet} produitModif = le produit avec les modifications
   */
  const modifierProduit = async (produitModif) => {
    const estModifie = await modifierElement(produitModif.id, produitModif);
    if (estModifie) {
      window.location.href = "/catalogue-produits";
      alert("Produit modifié avec succès");
    } else {
      alert("Erreur lors de la modification");
    }
  };
  return (
    <Formulaire
      titreFormulaire="Modifier produit"
      method="POST"
      enfants={
        <>
          <FormulaireInput
            type="text"
            nom="Nom"
            genre="un"
            estObligatoire={true}
            value={produitModif.nom}
            onChange={(e) => {
              const valeur = e.target.value;
              if (!isLength(valeur, { min: 2, max: 50 })) {
                const erreur = "Le nom doit comporter entre 2 et 50 caractères";
                setErreurs((prev) => ({ ...prev, nom: erreur }));
              } else {
                setProduitModif((prev) => ({
                  ...prev,
                  nom: valeur,
                }));
                setErreurs((prev) => ({ ...prev, nom: "" }));
              }
            }}
          />
          {erreurs.nom && <p className="erreur">{erreurs.nom}</p>}
          <FormulaireSelect
            nom="Catégorie"
            genre="une"
            estObligatoire={true}
            arrayOptions={["Vêtement", "Jouet", "Mobilier", "Livre"]}
            value={produitModif.categorie}
            onChange={(e) =>
              setProduitModif((prev) => ({
                ...prev,
                categorie: e.target.value,
              }))
            }
          />
          <FormulaireSelect
            nom="Age"
            genre="un"
            estObligatoire={true}
            arrayOptions={[
              "0 - 2 ans",
              "+ 3 ans",
              "+ 5 ans",
              "+ 10 ans",
              "+ 16 ans",
            ]}
            value={produitModif.age}
            onChange={(e) =>
              setProduitModif((prev) => ({ ...prev, age: e.target.value }))
            }
          />
          <FormulaireSelect
            nom="Etat"
            genre="un"
            estObligatoire={true}
            arrayOptions={[
              "Neuf",
              "Comme neuf",
              "Bon état",
              "État satisfaisant",
            ]}
            value={produitModif.etat}
            onChange={(e) =>
              setProduitModif((prev) => ({ ...prev, etat: e.target.value }))
            }
          />
          <FormulaireInput
            type="number"
            nom="Prix"
            genre="un"
            estObligatoire={true}
            value={produitModif.prix}
            onChange={(e) => {
              const valeur = e.target.value;
              if (!isNumeric(valeur)) {
                const erreur =
                  "Veuillez entrer un prix valide (nombre uniquement).";
                setErreurs((prev) => ({ ...prev, prix: erreur }));
              } else {
                setProduitModif((prev) => ({
                  ...prev,
                  prix: valeur,
                }));
                setErreurs((prev) => ({ ...prev, prix: "" }));
              }
            }}
          />
          <FormulaireTextarea
            nom="Description"
            genre="une"
            estObligatoire={true}
            defaultValue={produitModif.description}
            onChange={(e) => {
              const valeur = e.target.value;
              if (!isLength(valeur, { min: 2, max: 100 })) {
                const erreur =
                  "La description doit comporter entre 2 et 100 caractères";
                setErreurs((prev) => ({ ...prev, description: erreur }));
              } else {
                setProduitModif((prev) => ({
                  ...prev,
                  description: valeur,
                }));
                setErreurs((prev) => ({ ...prev, description: "" }));
              }
            }}
          />
          {erreurs.description && (
            <p className="erreur">{erreurs.description}</p>
          )}
        </>
      }
      bouton={
        <Bouton
          type="button"
          className="Bouton Bouton__classique"
          texte="Modifier le produit"
          lienAction={soummettreModif}
        />
      }
    />
  );
}

export default ModifierProduit;
