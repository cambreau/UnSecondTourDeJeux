// CSS
import "./SectionImageGauche.css";

//Composants
import BoutonLien from "../BoutonLien/BoutonLien";

function SectionImageGauche({
  titre,
  sousTitre = null,
  description = null,
  imageFond,
  descriptionImage = null,
  texteBtn = null,
  lienBtn = null,
  classBtn = null,
}) {
  return (
    <section className="SectionImageGauche">
      <picture className="SectionImageGauche__image">
        <img src={imageFond} alt={descriptionImage} />
      </picture>
      <div className="SectionImageGauche__boite">
        {titre && (
          <header>
            <h2>{titre}</h2>
          </header>
        )}
        {sousTitre && <p className="texte-accentuation">{sousTitre}</p>}
        {description && <p>{description}</p>}
        {texteBtn && (
          <BoutonLien texte={texteBtn} className={classBtn} lien={lienBtn} />
        )}
      </div>
    </section>
  );
}

export default SectionImageGauche;
