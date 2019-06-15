import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div className="app-div">
    <h1>Temporary Placeholder for Convocord</h1>

    < Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </Switch>

  </div>
);

export default App;

// ServerIndex renders at path "/" so we want it to appear in all parts of the app
// unless its the splash page, login or signup. Good to place in the Switch statement

/* 
  <Route path="/welcome" component={Splash} />
  <Route path="/" component={ServerIndexContainer} /> 
*/