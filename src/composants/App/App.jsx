// CSS
import "./App.css";
// Route
import { Routes, Route } from "react-router-dom";
// Composants
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Accueil from "../Accueil/Accueil";
import CatalogueProduits from "../CatalogueProduits/CatalogueProduits";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route
          path="/catalogue-produits"
          element={<CatalogueProduits />}
        ></Route>
        {/* <Route path="/contact" element={<ContactForm />}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
