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

function FiltresProduits({ filtreActuel, setFiltreActuel }) {
  return (
    <div className="FiltresProduits">
      <Filtre
        imageUrl={tous}
        nomFiltre="Tous les produits"
        dataFiltre="tous"
        setFiltreActuel={setFiltreActuel}
        filtreActuel={filtreActuel}
      />
      <Filtre
        imageUrl={vetement}
        nomFiltre="Vêtement"
        dataFiltre="vetement"
        setFiltreActuel={setFiltreActuel}
        filtreActuel={filtreActuel}
      />
      <Filtre
        imageUrl={jouets}
        nomFiltre="Jouet"
        dataFiltre="jouet"
        setFiltreActuel={setFiltreActuel}
        filtreActuel={filtreActuel}
      />
      <Filtre
        imageUrl={livre}
        nomFiltre="Livre"
        dataFiltre="livre"
        setFiltreActuel={setFiltreActuel}
        filtreActuel={filtreActuel}
      />
      <Filtre
        imageUrl={mobilier}
        nomFiltre="Mobilier"
        dataFiltre="mobilier"
        setFiltreActuel={setFiltreActuel}
        filtreActuel={filtreActuel}
      />
    </div>
  );
}

export default FiltresProduits;
