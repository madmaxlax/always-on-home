import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { RouteWithLayout } from './components';
import Empty from './layouts/Empty/Empty';
import Main from './layouts/Main/Main';
import Minimal from './layouts/Minimal/Minimal';
import { Home } from './pages/Home';
import { MainPage } from './pages/MainPage';
import { MinimalPage } from './pages/MinimalPage';
import { NotMadeYet } from './pages/NotMadeYet';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout component={Home} exact layout={Empty} layoutprops={{}} path={['/']} />
      <RouteWithLayout component={MinimalPage} exact layout={Minimal} layoutprops={{}} path={['/oldmain']} />

      <RouteWithLayout component={MainPage} exact layout={Main} path="/main/:pageName" />
      <RouteWithLayout component={NotMadeYet} exact layout={Minimal} layoutprops={{}} path="/404-not-found" />
      <Redirect
        push
        to={{
          pathname: '/404-not-found',
          search: '?from=' + encodeURIComponent(window.location.href),
          state: { from: window.location.href },
        }}
      />
    </Switch>
  );
};

export default Routes;
