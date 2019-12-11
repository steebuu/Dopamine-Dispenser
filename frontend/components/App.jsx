import React from 'react';
import GreetingContainer from './greeting_container';
import SignupFormContainer from '../components/signup_form_container';
import LoginFormContainer from '../components/login_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import {Link} from 'react-router-dom'

const App = () => (
  <section className="app">
    
    <div className="app-div">
      <header>
        <img className="text-logo" src={window.signupPhoto} alt=""/>
      </header>
      <Route exact path="/">
        <img src="window.splashPhoto" alt=""/>
      </Route>
      <Switch>
        <Route exact path="/" component={SignupFormContainer}></Route>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <AuthRoute path="/login" component={LoginFormContainer}/>
      </Switch>
    </div>

    <div className="opposite">
      <Route exact path="/signup" >
        <p className="opposite-p">
          Have an account? <Link to="/login">Log in</Link>
        </p>
      </Route>
      <Route exact path="/">
        <p className="opposite-p">
          Have an account? <Link to="/login">Log in</Link>
        </p>
      </Route>
      <Route exact path="/login">
        <p className="opposite-p">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </Route>
    </div>
        
    <footer>

    </footer>
  </section>
);

export default App;