import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupJoiner from './userauth/signup_joiner';
import NavBarContainer from './navbar/navbar_container';
import SignupSplash from './userauth/signup_splash';
import {ProtectedRoute, AuthRoute} from '../util/route_util';
import ImageIndex from './feed/image_index';

class Splash extends React.Component {
  render(){
    if (this.props.loggedIn){
      return(
        <div className="loggedin-splash">
          <NavBarContainer></NavBarContainer>
          <ImageIndex></ImageIndex>
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