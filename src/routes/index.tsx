import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import Logout from '../pages/logout';
const Home = lazy(() => import('../pages/home'));
const Message = lazy(() => import('../pages/message'));
const Login = lazy(() => import('../pages/login'));
const Remember = lazy(() => import('../pages/remember'));
const Register = lazy(() => import('../pages/register'));
const Inputs = lazy(() => import('../../src/components/inputs'));

const Routes: React.FC = () => {
  return (
    <Router>
      <Route exact path={'/logout'} component={Logout} />
      <Suspense fallback={<div>Carregando...</div>}>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/home'} component={Home} />
        <Route exact path={'/message'} component={Message} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/remember'} component={Remember} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/inputs'} component={Inputs} />
      </Suspense>
    </Router>
  );
}

export default Routes;