import React from 'react';
import { Route } from 'react-router-dom';
import SignupJoiner from './signup_joiner';

const SignupSplash = () => {
  return (
    <div className="splash-signup-div">
      <Route exact path="/">
        <div className="splash-slide-div">
          <img className="splash-slide" src={window.splashSlide1} alt="" />
        </div>
      </Route>

      <SignupJoiner />
    </div>
  )
}

export default SignupSplash;