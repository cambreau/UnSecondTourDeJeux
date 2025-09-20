// CSS
import "./BanniereCatalogue.css";
// Import image
import banniereLeft from "@assets/images/banniere-left.jpg";
import banniereMiddle from "@assets/images/banniere-middle.jpg";

function BanniereCatalogue() {
  return (
    <div className="BanniereCatalogue">
      <picture className="BanniereCatalogue__picture">
        <img src={banniereLeft} alt="Bannière d'accueil" />
      </picture>
      <picture className="BanniereCatalogue__picture">
        <img src={banniereMiddle} alt="Bannière d'accueil" />
      </picture>
    </div>
  );
}

export default BanniereCatalogue;
