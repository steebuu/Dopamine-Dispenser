import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.logoutCurrentUser();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <div>Welcome to {this.props.currentUser.username}</div>
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      )
    }
    else {
      return (
        <div>
          <Link to="/signup"></Link>
          <Link to="/login"></Link>
        </div>
      )
    }
  }
}

export default Greeting;