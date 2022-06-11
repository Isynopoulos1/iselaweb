import React from "react";
import { Route, Switch } from "react-router-dom";

// IMPORT ROUTES
import Home from "@pages/home/Home";
import About from "@pages/about/About";
import Works from "@pages/works/Works";
import Work from "./pages/work/Work";
import Contact from "@pages/contact/Contact";
import NotFound from "@pages/notFound/NotFound";

const Router = ({ location }) => {
  const routes = [
    { path: "/", component: Home, exact: true },
    { path: "/about", component: About, exact: true },
    { path: "/works", component: Works, exact: true },
    { path: "/works/:name", component: Work, exact: true },
    { path: "/contact", component: Contact, exact: true },
    { path: "*", component: NotFound, exact: false }
  ];
  return (
    <Switch>
      {routes?.map((route, i) => {
        return <Route key={i} exact={route.exact} path={route.path} component={route.component} />;
      })}
    </Switch>
  );
};

export default Router;
