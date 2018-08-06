import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import PublicRoute from './publicRoute';
import AuthenticatedRoute from './authenticatedRoute';

import LoginContainer from '../ui/containers/LoginContainer';
import HomeContainer from '../ui/containers/HomeContainer';


const routes = (
  <Switch>

    <PublicRoute path='/login' component={LoginContainer} />
    <AuthenticatedRoute path='/home' component={HomeContainer} />

    <Route path='/*' component={() => (<Redirect to='/'/>) } />
  </Switch>
);

export default routes;
