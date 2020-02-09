import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupJoiner from './userauth/signup_joiner';
import NavBarContainer from './navbar/navbar_container';
import SignupSplash from './userauth/signup_splash';
import {ProtectedRoute, AuthRoute} from '../util/route_util';
import MainFeedContainer from './feed/main_feed_container';

class Splash extends React.Component {
  render(){
    if (this.props.loggedIn){
      return(
        <div className="loggedin-splash">
          <NavBarContainer></NavBarContainer>
          <MainFeedContainer/>
        </div>
      )
    } else {
      return (
        <SignupSplash></SignupSplash>
      )
    }
  }

}

export default Splash;