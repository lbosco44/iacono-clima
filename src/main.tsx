import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/geist";
// leaflet.css viene iniettato dinamicamente da BriefingMap al momento del lazy-load
import "./index.css";
import "flyonui/flyonui.js";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
