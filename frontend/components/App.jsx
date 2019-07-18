import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import SplashContainer from './splash/splash_container';
import NoMatch from './error/no_match';

import HomeMainContainer from './home/home_main_container';

const App = () => (
  <div className="app-div">
    < Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/" component={HomeMainContainer} />
      <Route component={NoMatch} />
    </Switch>

  </div>
);

export default App;

// Refactoring to have base components HomeMain at /servers/@me and ServersMain at /servers/:serverId/...
// {/* <HomeLayoutRoute path="/servers/@me" component={FriendIndex} /> */}
// {/* <ProtectedRoute path="/servers/:serverId" component={NoMatch} /> */}

// ServerIndex renders at path "/" so we want it to appear in all parts of the app
// unless its the splash page, login or signup. Good to place in the Switch statement


