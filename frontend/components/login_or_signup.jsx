import React from 'react';
import {Route} from 'react-router-dom';
import SignupJoiner from './signup_joiner';

const LoginOrSignup = () => {
  return (
    <div className="splash-signup-div">
      <Route exact path="/">
        <img className="splash-photo" src={window.splashPhoto} alt="" />
      </Route>

      <SignupJoiner />
    </div>
  )
}

export default LoginOrSignup;