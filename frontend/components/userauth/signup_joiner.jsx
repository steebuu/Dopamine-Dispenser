import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Opposite from './opposite';
import { AuthRoute } from '../../util/route_util';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';

const SignupJoiner = () => {
  return(
    <div className="signup-joiner-div">
      <div className="app-div">
        <header>
          <img className="text-logo" src={window.signupPhoto} alt="" />
        </header>

        <Switch>
          <Route exact path="/" component={SignupFormContainer}></Route>
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
        </Switch>
      </div>
      <Opposite />

      {/* <p className="get-app-msg">Get the app.</p>
      <div className="downloads-div">
        <img className="download-img" src={window.appStore} alt="" />
        <img className="download-img" src={window.googlePlay} alt="" />
      </div> */}
    </div>
  )
}

export default SignupJoiner;

