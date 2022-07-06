import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

//IMPORT COMPONENTS
import Header from "@layout/header/Header";
import Footer from "@layout/footer/Footer";
import Router from "./Router";

//IMPORT STYLES
import "@styles/reset.css";

const App = ({ location, history }) => {
  // LIFECYCLE
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // MAIN RENDER
  return (
    <div>
      <Header />
      <Router location={location} />
      <Footer history={history} />
    </div>
  );
};

export default withRouter(App);
