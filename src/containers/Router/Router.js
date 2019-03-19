import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Articles from 'containers/Articles';
import NavBar from 'containers/NavBar';
import Home from 'containers/Home';

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default Router;
