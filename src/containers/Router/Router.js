import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Articles from 'containers/Articles';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Articles} />
    </Switch>
  </BrowserRouter>
);

export default Router;
