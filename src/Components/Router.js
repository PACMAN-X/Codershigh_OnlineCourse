import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home/index.js';
import Curriculum from '../Routes/Curriculum/index.js';

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/curriculum" exact component={Curriculum} />
      </Switch>
    </>
  </Router>
);
