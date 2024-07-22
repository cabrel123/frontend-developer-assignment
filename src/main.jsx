import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/600.css"; // Specify weight
import "@fontsource/montserrat/600-italic.css"; // Specify weight and style
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
