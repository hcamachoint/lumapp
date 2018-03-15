//Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componentes
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Index from './components/Main';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
