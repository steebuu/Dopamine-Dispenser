import React from 'react';
import GreetingContainer from './greeting_container';
import SignupFormContainer from './userauth/signup_form_container';
import LoginFormContainer from './userauth/login_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Link} from 'react-router-dom';
import Footer from './footer';
import SignupJoiner from './userauth/signup_joiner';
import SplashContainer from './splash_container';
import NavBarContainer from './navbar/navbar_container';

class App extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
    // const { loggedIn } = this.props;
    // // if (loggedIn){
    // //   return(
    // //     <section className="app">
    // //       <NavBarContainer></NavBarContainer>
    // //       <Footer /> 
    // //     </section>
    // //   )
    // // }  
    return (
      <section className="app">
        <Route path="/" component={SplashContainer}/>
        
        <Footer/> 
      </section>
    )
  }

};

export default App;