import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Dev from "Routes/Dev";
import UX from "Routes/UX";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Dev" exact component={Dev} />
        <Route path="/UX" exact component={UX} />
      </Switch>
    </>
  </Router>
);
