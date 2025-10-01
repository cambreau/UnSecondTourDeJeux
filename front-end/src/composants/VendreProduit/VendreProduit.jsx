// CSS
import Formulaire from "../compostants-partages/Formulaire/Formulaire";
import FormulaireInput from "../compostants-partages/Formulaire/FormulaireInput/FormulaireInput";
import "./VendreProduit.css";

function VendreProduit() {
  return (
    <Formulaire titreFormulaire="Vendre un produit" method="POST">
      <FormulaireInput
        type="email"
        nom="nomUtilisateur"
        estObligatoire="true"
      />
      <FormulaireInput type="password" nom="motDePasse" estObligatoire="true" />
    </Formulaire>
  );
}

export default VendreProduit;
