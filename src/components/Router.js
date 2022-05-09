import React from "react";
import { Route, Switch } from "react-router-dom";

// IMPORT ROUTES
import Home from "@pages/home/Home";
import About from "@pages/about/About";
import Work from "@pages/work/Work";
import Contact from "@pages/contact/Contact";

const Router = ({ location }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};

export default Router;
