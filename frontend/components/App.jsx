import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HomeLayoutRoute } from '../util/route_util';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import SplashContainer from './splash/splash_container';
import NoMatch from './error/no_match';

import ServerIndexContainer from './servers/server_index_container';
import FriendIndex from './friends/friend_index';

const App = () => (
  <div className="app-div">
    < Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <HomeLayoutRoute path="/servers/@me" component={FriendIndex} />
      <ProtectedRoute path="/servers/:serverId" component={NoMatch} />
      <Route component={NoMatch} />
    </Switch>

  </div>
);

export default App;

// ServerIndex renders at path "/" so we want it to appear in all parts of the app
// unless its the splash page, login or signup. Good to place in the Switch statement

/*
<h1>Temporary Placeholder for Convocord</h1>
  <Route path="/welcome" component={Splash} />
  <Route path="/" component={ServerIndexContainer} /> 
*/

