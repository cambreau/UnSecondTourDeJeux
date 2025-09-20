// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// CSS
import "./index.css";
// Composant qui fournit le contexte de routage à l'application React.
import { BrowserRouter } from "react-router-dom";
// Composants
import App from "./composants/App/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
