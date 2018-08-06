import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import PublicRoute from './publicRoute';
import AuthenticatedRoute from './authenticatedRoute';

import LoginContainer from '../ui/containers/LoginContainer';


const routes = (
  <Switch>

    <PublicRoute path='/' component={LoginContainer} />
    {/* <AuthenticatedRoute path='/' component={} /> */}

    <Route path='/*' component={() => (<Redirect to='/'/>) } />
  </Switch>
);

export default routes;
