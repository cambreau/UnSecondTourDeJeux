// CSS
import "./TotalPrix.css";

function TotalPrix({ panier }) {
  let prixTotal = 0;
  panier.forEach((produit) => {
    prixTotal = prixTotal + produit.prix;
  });
  return (
    <p className="TotalPrix">
      Total :<span className="TotalPrix__montant"> {prixTotal}$</span>
    </p>
  );
}

export default TotalPrix;
