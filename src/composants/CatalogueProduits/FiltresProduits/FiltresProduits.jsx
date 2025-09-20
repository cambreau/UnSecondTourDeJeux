// CSS
import "./FiltresProduits.css";
// Composants
import Filtre from "./Filtre/Filtre";
// Images
import vetement from "@assets/images/vetement.png";
import mobilier from "@assets/images/mobilier.png";
import jouets from "@assets/images/jouets.png";
import livre from "@assets/images/livre.png";
import tous from "@assets/images/tous.png";

function FiltresProduits() {
  return (
    <div className="FiltresProduits">
      <Filtre
        imageUrl={tous}
        nomFiltre="Tous les produits"
        data-filtre="tous"
      />
      <Filtre imageUrl={vetement} nomFiltre="Vêtement" data-filtre="vetement" />
      <Filtre imageUrl={jouets} nomFiltre="Jouet" data-filtre="jouets" />
      <Filtre imageUrl={livre} nomFiltre="Livre" data-filtre="livre" />
      <Filtre imageUrl={mobilier} nomFiltre="Mobilier" data-filtre="mobilier" />
    </div>
  );
}

export default FiltresProduits;
