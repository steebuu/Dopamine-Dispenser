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

  xClass(field) {
    const {errors} = this.props;
    if (errors.some(err => err.includes(field))){
      return "active-x";
    } else {
      return "inactive-x";
    }
  }
  
  componentWillUnmount(){
    this.props.clearErrors();
  }

  errorCheck() {
    if (this.props.errors.length > 0){
      return "Sorry, something went wrong creating your account. Please try again soon.";
    }
  }

  render() {
    //if youre logged in, show neither of these
    const errors = this.props.errors.map((error, i) => {
      return <li key={i}>{error}</li>
    })

    if (this.props.formType === "signup") {
      return (
        <div className="form-holder-div">
          <form className="signup">
            <h2 className="signup-msg">Sign up to see photos from your friends.</h2>
            <button>Log in with Facebook</button>
            <div className="or-block-div">
              <div className="line-div"></div>
              <div className="or-div">OR</div>
              <div className="line-div"></div>
            </div>
            <div className="signup-div">
              <label className="input-label">
                <span className={this.spanClass("email")} id="span">Email</span>
                <input type="email" onChange={this.handleChange("email")} value={this.state.email} />
                <div className="x-div">
                  <i className={"far fa-times-circle " + this.xClass("Email")}></i>
                </div>
              </label>
            </div>
            <div className="signup-div">
              <label className="input-label">
                <span className={this.spanClass("username")} id="span">Username</span>
                <input type="text" onChange={this.handleChange("username")} value={this.state.username} />
                <div className="x-div">
                  <i className={"far fa-times-circle " + this.xClass("Username")}></i>
                </div>
              </label>
            </div>
            <div className="signup-div">
              <label className="input-label">
                <span className={this.spanClass("password")} id="span">Password</span>
                <input type="password" onChange={this.handleChange("password")} value={this.state.password}></input>
                <div className="x-div">
                  <i className={"far fa-times-circle " + this.xClass("Password")}></i>
                </div>
              </label>
            </div>
            <div className="button-div">
              <button onClick={this.handleSubmit}>Sign Up</button>
            </div>
            <div className="error-div">
              <p className="error-p">{this.errorCheck()}</p>
            </div>
            <p className="signup-tos">
              By signing up, you agree to our Terms, Data Policy and Cookies Policy.
            </p>
          </form>
        </div>
      )
    } else if (this.props.formType === "login") {
      return (
        <div className="form-holder-div">
          <form className="login">
            <div className="signup-div">
              <label className="input-label">
                <span className={this.spanClass("username")} id="span">Username</span>
                <input type="text" onChange={this.handleChange("username")} value={this.state.username} />
              </label>
            </div>
            <div className="signup-div">
              <label className="input-label">
                <span className={this.spanClass("password")} id="span">Password</span>
                <input type="password" onChange={this.handleChange("password")} value={this.state.password}></input>
              </label>
            </div>
            <div className="button-div">
              <button onClick={this.handleSubmit}>Log In</button>
            </div>
            <p>{errors}</p>
            <p className="signup-tos">
              By signing up, you agree to our Terms, Data Policy and Cookies Policy.
            </p>
          </form>
        </div>
      )
    }
  }
}

export default SessionForm;