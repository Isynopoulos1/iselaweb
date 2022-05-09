import React from "react";
import { Route, Switch } from "react-router-dom";

// IMPORT ROUTES
import { routes } from "./Routes";
import Home from "@pages/home/Home";

const Router = ({ location }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {routes.map((page, index) => (
        <Route exact key={index} path={page.path} component={page.component} />
      ))}
    </Switch>
  );
};

export default Router;
