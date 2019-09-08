import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ContactList as ContactListView,
  TicketList as TicketListView,
  AssetList as AssetsListView,
  Account as AccountView,
  // Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/tickets"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={ContactListView}
        exact
        layout={MainLayout}
        path="/contacts"
      /> 
      
      <RouteWithLayout
        component={TicketListView}
        exact
        layout={MainLayout}
        path="/tickets"
      />
      <RouteWithLayout
        component={AssetsListView}
        exact
        layout={MainLayout}
        path="/assets"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      {/* <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      /> */}
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;