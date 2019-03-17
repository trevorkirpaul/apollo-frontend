import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Articles from 'containers/Articles';
import NavBar from 'containers/NavBar';

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Articles} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default Router;
