// Produits
export const recupererProduits = async () => {
  try {
    const reponse = await fetch(`${import.meta.env.VITE_BACKEND_PRODUITS_URL}`);
    return reponse.json();
  } catch (error) {
    console.log(error);
  }
};

export const recupererProduit = async (id) => {
  try {
    const reponse = await fetch(
      `${import.meta.env.VITE_BACKEND_PRODUITS_URL}/${id}`
    );
    return reponse.json();
  } catch (error) {
    console.log(error);
  }
};
