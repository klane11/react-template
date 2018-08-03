import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import PublicRoute from './publicRoute';
import AuthenticatedRoute from './authenticatedRoute';



const routes = (
  <Switch>

    {/* <PublicRoute path='/' component={} />
    <AuthenticatedRoute path='/' component={} /> */}

    <Route path='/*' component={() => (<Redirect to='/'/>) } />
  </Switch>
);

export default routes;
