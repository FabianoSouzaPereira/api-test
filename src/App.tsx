/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
