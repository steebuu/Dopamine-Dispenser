import React from 'react';
import GreetingContainer from './greeting_container';
import SignupFormContainer from '../components/signup_form_container';
import LoginFormContainer from '../components/login_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import {Link} from 'react-router-dom';
import Footer from './footer';
import SignupJoiner from './signup_joiner';
import LoginOrSignup from './login_or_signup';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    // if (this.props.currentUser){
    //   console.log('asd');
    //   return null;
    // }
    return (
      <section className="app">
        <Route path="/" component={LoginOrSignup}/>
        <Footer/> 
      </section>
    )
  }

};

export default App;