// CSS
import "./BtnModifSuppr.css";
// Import image
import poubelle from "@assets/images/poubelle.svg";
import modifier from "@assets/images/modifier.png";
import { Link } from "react-router-dom";
// Import requete
import { supprimerElement } from "../../../../utils/requetes";

function BtnModifSuppr({ produit }) {
  const supprimerProduit = async () => {
    const estSupprime = await supprimerElement(produit.id);
    if (estSupprime) {
      window.location.href = "/catalogue-produits";
      alert("Produit supprimé");
    } else {
      alert("Erreur lors de la suppression");
    }
  };

  return (
    <div className="BtnModifSuppr">
      <Link
        className="BtnModifSuppr__btn"
        to={`/modifier-produit/${produit.id}`}
      >
        <img src={modifier} alt="Icon modifier" />
      </Link>
      <button className="BtnModifSuppr__btn" onClick={supprimerProduit}>
        <img src={poubelle} alt="Icon poubelle" />
      </button>
    </div>
  );
}

export default BtnModifSuppr;
