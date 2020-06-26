import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Cupom from './pages/Cupom';
// import Error from './pages/Error';

const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact={true} component={Dashboard} path="/" />
        <Route exact={true} component={Cupom} path="/cupons" />
        {/* <Route exact={true} component={Error} path="/*" /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;