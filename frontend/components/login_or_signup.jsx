import React from 'react';
import {Route} from 'react-router-dom';
import SignupJoiner from './signup_joiner';

const LoginOrSignup = () => {
  return (
    <div className="splash-signup-div">
      <Route exact path="/">
        <div className="splash-slide-div">
          {/* <img className="splash-photo" src={window.splashPhoto} alt="" /> */}
          <img className="splash-slide" src={window.splashSlide1} alt=""/>
        </div>
      </Route>

      <SignupJoiner />
    </div>
  )
}

export default LoginOrSignup;