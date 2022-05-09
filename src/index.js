import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// IMPORT COMPONENTS
import App from "./components/App";

// DEFINE ROOT AND RENDER ELEMENT
const rootElement = document.getElementById("root");
const appRender = (
  <Router>
    <App />
  </Router>
);

// RENDER APP
render(appRender, rootElement);
