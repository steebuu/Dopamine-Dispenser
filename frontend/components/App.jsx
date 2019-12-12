import React from 'react';
import GreetingContainer from './greeting_container';
import SignupFormContainer from '../components/signup_form_container';
import LoginFormContainer from '../components/login_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Link} from 'react-router-dom';
import Footer from './footer';
import SignupJoiner from './signup_joiner';
import LoginOrSignup from './login_or_signup';
import NavBarContainer from './navbar/navbar_container';

class App extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
    const { loggedIn } = this.props;
    if (loggedIn){
      return(
        <section className="app">
          <NavBarContainer></NavBarContainer>
          <Footer /> 
        </section>
      )
    }  
    return (
      <section className="app">
        <Route path="/" component={LoginOrSignup}/>
        <Footer/> 
      </section>
    )
  }

};

export default App;