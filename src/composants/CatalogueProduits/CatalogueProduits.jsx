// CSS
import "./CatalogueProduits.css";
// Composants
import BanniereCatalogue from "./BanniereCatalogue/BanniereCatalogue";
import FiltresProduits from "./FiltresProduits/FiltresProduits";
import CarteProduit from "../compostants-partages/CarteProduit/CarteProduit";
//Data => sera remplace par une BD
import { produits } from "../../../public/data-produits";

function CatalogueProduits() {
  return (
    <section>
      <BanniereCatalogue />
      <h2 className="CatalogueProduits__titre">Découvrez nos produits</h2>
      <FiltresProduits />
      <div className="CatalogueProduits__produits">
        {produits.map((produit, index) => (
          <CarteProduit key={index} produit={produit} />
        ))}
      </div>
    </section>
  );
}

export default CatalogueProduits;
