import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// REDUX
import { store } from "./store";
import { Provider } from "react-redux";

//TRANSLATIONS
import { LocalizeProvider } from "r1-localize";
import { initialize } from "@utils";

// IMPORT COMPONENTS
import App from "./components/App";

// DEFINE ROOT AND RENDER ELEMENT
const rootElement = document.getElementById("root");
const appRender = (
  <Provider store={store}>
    <LocalizeProvider store={store} initialize={initialize()}>
      <Router>
        <App />
      </Router>
    </LocalizeProvider>
  </Provider>
);

// RENDER APP
render(appRender, rootElement);
