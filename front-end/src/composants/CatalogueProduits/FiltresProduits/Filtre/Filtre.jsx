// CSS
import "./Filtre.css";

function Filtre({
  imageUrl,
  nomFiltre,
  dataFiltre,
  setFiltreActuel,
  filtreActuel,
}) {
  const changerFiltre = () => {
    setFiltreActuel(dataFiltre);
  };
  return (
    <button
      onClick={changerFiltre}
      className={filtreActuel == dataFiltre ? "Filtre__actif" : "Filtre"}
    >
      <picture className="Filtre__image">
        <img src={imageUrl} alt={nomFiltre} />
      </picture>
      <h4 className="Filtre__titre">{nomFiltre}</h4>
    </button>
  );
}

export default Filtre;
