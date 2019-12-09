import React from 'react';
import GreetingContainer from './greeting_container';
import SignupFormContainer from '../components/signup_form_container';
import LoginFormContainer from '../components/login_form_container';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Dopamine Dispenser</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;