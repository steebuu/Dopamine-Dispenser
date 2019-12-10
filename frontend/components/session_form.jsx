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
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  spanClass(field) {
    if (this.state[field].length > 0){
      return "active-span";
    } else {
      return "inactive-span";
    }
  }

  render() {
    //if youre logged in, show neither of these
    const errors = this.props.errors.map((error, i) => {
      return <li key={i}>{error}</li>
    })

    if (this.props.formType === "signup") {
      return (
        <form className="signup">
          <h2>Sign up to see photos from your friends.</h2>
          <br/>
          <div className="signup-div">
            <label>
              <span className={this.spanClass("email")} id="span">Email</span>
              <input type="email" onChange={this.handleChange("email")} value={this.state.email} />
            </label>
          </div>
          <div className="signup-div">
            <label>
              <span className={this.spanClass("username")} id="span">Username</span>
              <input type="text" onChange={this.handleChange("username")} value={this.state.username} />
            </label>
          </div>
          <div className="signup-div">
            <label>
              <span className={this.spanClass("password")} id="span">Password</span>
              <input type="password" onChange={this.handleChange("password")} value={this.state.password}></input>
            </label>
          </div>
          <div className="button-div">
            <button onClick={this.handleSubmit}>Sign Up</button>
          </div>
          <p>{errors}</p>
          {/* <p>
            By signing up, you agree to our Terms , Data Policy and Cookies Policy .
          </p> */}
          <p>
            Have an account? <Link to="/login">Log in</Link> instead
          </p>
        </form>
      )
    } else if (this.props.formType === "login") {
      return (
        <form className="login">
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