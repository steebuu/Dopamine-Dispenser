import React from 'react';
import {Link, Route} from 'react-router-dom';
import {AuthRoute} from '../../util/route_util'
import SignupFormContainer from '../userauth/signup_form_container';
import LoginFormContainer from '../userauth/login_form_container';

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
    return(
      <nav className="navbar-nav">
        {/* <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} /> */}
        <div className="navbar-content-div">
          <div className="icon-logo-div">
            <i className="fas fa-theater-masks"></i>
            <div className="vr"></div>
            <div className="nav-text-logo-div">
              <img src={window.signupPhoto} alt="" className="navlogo"/>
            </div>
          </div>
          <div className="nav-search-div">
            <span></span>
            <input className="nav-search" type="text" name="" />
          </div>
          <div className="nav-right-div">
            <div className="nav-right-icons-div">
              <i className="far fa-compass"></i>  
              <i className="far fa-heart"></i>
              <i className="far fa-user" onClick={this.handleLogout}></i>
              {/* <button className="nav-logout-button" onClick={this.handleLogout}>Logout</button> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;