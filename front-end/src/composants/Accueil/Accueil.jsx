// CSS
import "./Accueil.css";
// Composants
import SectionImageGauche from "../compostants-partages/SectionImageGauche/SectionImageGauche";
// Images
import imageFond from "@assets/images/image-accueil1.jpg";
import Bouton from "../compostants-partages/Bouton/Bouton";

function Accueil() {
  return (
    <SectionImageGauche
      titre="Notre objectif,"
      description=" Vous permettre d’accéder à de nombreux livres,vêtements, jouets et
          accessoires pour enfants à des prix abordables.
          Nous vous proposons une large gamme de produits neufs ou d’occasion,
          en bon état, à des prix très attractifs.
          Offir le meilleur à nos enfants, tout en respectant notre budget c'est
          possible."
      imageFond={imageFond}
      descriptionImage="Image d'une chambre d'enfant"
      texteBtn="Alors n'hésitez plus, découvrez notre catalogue"
      lienBtn="/catalogue-produits"
      classBtn="Bouton__classique"
    />
  );
}

export default Accueil;
