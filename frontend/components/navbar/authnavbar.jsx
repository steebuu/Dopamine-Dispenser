import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AuthNavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {currentUser} = this.props;
    if (currentUser) {
      return(
        <div className="nav-right-div">
          <div className="nav-right-icons-div">
            <i className="far fa-compass navbar-icon"></i>
            <i className="far fa-heart navbar-icon"></i>
            <Link to={`/users/${currentUser.id}`} className="icon-link">
              <i className="far fa-user navbar-icon"></i>
            </Link>
          </div>
        </div>
      )
    } else {
      return(
        <div className="nav-right-div">
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      )
    }
  }
}

const msp = state => {
  return{
    currentUser: state.entities.users[state.session.id]
  }
}

export default connect(msp, null)(AuthNavBar);