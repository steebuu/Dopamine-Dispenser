import React from 'react';
import SignupFormContainer from './userauth/signup_form_container';
import LoginFormContainer from './userauth/login_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Link} from 'react-router-dom';
import Footer from './footer';
import SignupJoiner from './userauth/signup_joiner';
import SplashContainer from './splash_container';
import NavBarContainer from './navbar/navbar_container';
import ProfileContainer from './profile/profile_container';
import Modal from './modal';

class App extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
    // const {currentUser} = this.props.currentUser;
    return (
      <section className="app">
        <Modal/>
        <Switch>
          <ProtectedRoute path="/users/:username" component={ProfileContainer}/>
          <Route path="/" component={SplashContainer}/>
        </Switch>
        <Footer/> 
      </section>
    )
  }

};

export default App;