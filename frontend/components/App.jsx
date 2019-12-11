import React from 'react';
import GreetingContainer from './greeting_container';
import SignupFormContainer from '../components/signup_form_container';
import LoginFormContainer from '../components/login_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import {Link} from 'react-router-dom'

const App = () => (
  <section className="app">
    <div className="splash-signup-div">
      <Route exact path="/">
        <img className="splash-photo" src={window.splashPhoto} alt="" />
      </Route>

      <div className="signup-joiner-div">
        <div className="app-div">
          <header>
            <img className="text-logo" src={window.signupPhoto} alt=""/>
          </header>
          
          <Switch>
            <Route exact path="/" component={SignupFormContainer}></Route>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
          </Switch>
        </div>
        <div className="opposite">
          <Route exact path="/signup" >
            <p className="opposite-p">
              Have an account? <Link to="/login" className="link">Log in</Link>
            </p>
          </Route>
          <Route exact path="/">
            <p className="opposite-p">
              Have an account? <Link to="/login" className="link">Log in</Link>
            </p>
          </Route>
          <Route exact path="/login">
            <p className="opposite-p">
              Don't have an account? <Link to="/signup" className="link">Sign up</Link>
            </p>
          </Route>
        </div>

        <p className="get-app-msg">Get the app.</p>
        <div className="downloads-div">
          <img className="download-img" src={window.appStore} alt=""/>
          <img className="download-img" src={window.googlePlay} alt=""/>
        </div>
      </div>
    </div>

          
      <footer className="main-footer">
        <div className="footer-nav-div">
          <nav className="footer-nav">
            <ul className="footer-list">
              <a className="footer-link" href="">ABOUT US</a>
              <a className="footer-link" href="">SUPPORT</a>
              <a className="footer-link" href="">PRESS</a>
              <a className="footer-link" href="">API</a>
              <a className="footer-link" href="">JOBS</a>
              <a className="footer-link" href="">PRIVACY</a>
              <a className="footer-link" href="">TERMS</a>
              <a className="footer-link" href="">DIRECTORY</a>
              <a className="footer-link" href="">PROFILES</a>
              <a className="footer-link" href="">HASHTAG</a>
              <a className="footer-link" href="">LANGUAGE</a>
            </ul>
          </nav>
        <p className="copyright">© 2019 DYING APE MAN TRAPPED IN SMALL ROOM</p>
        </div>
      </footer>
  </section>
);

export default App;