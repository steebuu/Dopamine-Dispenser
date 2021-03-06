import React from 'react';
import {Link, Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../../util/route_util';
import SignupFormContainer from '../userauth/signup_form_container';
import LoginFormContainer from '../userauth/login_form_container';
import ProfileContainer from '../profile/profile_container';
import AuthNavBar from './authnavbar';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  render() {
    // const {currentUser} = this.props;

    return(
      <nav className="navbar-nav">
        {/* <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} /> */}
        <div className="navbar-content-div">
          <Link to="/" className="icon-logo-link"> 
            <div className="icon-logo-div">
              <i className="fas fa-theater-masks"></i>
              <div className="vr"></div>
              <div className="nav-text-logo-div">
                <img src={window.signupPhoto} alt="" className="navlogo"/>
              </div>
            </div>
          </Link>
          <div className="nav-search-div">
            <span></span>
            <input className="nav-search" type="text" name="" />
          </div>
          <AuthNavBar/>
        </div>
      </nav>
    )
  }
}

export default NavBar;