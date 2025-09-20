// CSS
import "./Filtre.css";

function Filtre({ imageUrl, nomFiltre, classFiltre }) {
  return (
    <div className="Filtre">
      <picture className="Filtre__image">
        <img src={imageUrl} alt={classFiltre} />
      </picture>
      <h4 className="Filtre__titre">{nomFiltre}</h4>
    </div>
  );
}

export default Filtre;
