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

export const modifierElement = async (id, element) => {
  let reponse;
  reponse = await fetch(`${import.meta.env.VITE_BACKEND_PRODUITS_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(element),
  });
  if (reponse.ok) {
    return true;
  } else {
    return false;
  }
};

export const supprimerElement = async (id) => {
  let reponse;
  reponse = await fetch(`${import.meta.env.VITE_BACKEND_PRODUITS_URL}/${id}`, {
    method: "DELETE",
  });
  if (reponse.ok) {
    return true;
  } else {
    return false;
  }
};
