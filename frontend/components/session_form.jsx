import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    //if youre logged in, show neither of these
    const errors = this.props.errors.map((error, i) => {
      return <li key={i}>{error}</li>
    })

    if (this.props.formType === "signup") {
      return (
        <form>
          <h2>Sign Up</h2>
          <ul>{errors}</ul>
          <Link to="/login">Log in instead</Link>
          <br/>
          Username: <input type="text" onChange={this.handleChange("username")} value={this.state.username} />
          <br/>
          Email: <input type="text" onChange={this.handleChange("email")} value={this.state.email} />
          <br/>
          Password: <input type="password" onChange={this.handleChange("password")} value={this.state.password}></input>
          <br/>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      )
    } else if (this.props.formType === "login") {
      return (
        <form>
          <ul>{errors}</ul>
          <h2>Log In</h2>
          <Link to="/signup">Sign up instead</Link>
          <br/>
          Username: <input type="text" onChange={this.handleChange("username")} value={this.state.username}></input>
          <br/>
          Password: <input type="password" onChange={this.handleChange("password")} value={this.state.password}></input>
          <br/>
          <button onClick={this.handleSubmit}>Log In</button>
        </form>
      )
    }
  }
}

export default SessionForm;