import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      full_name: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.errorCheck = this.errorCheck.bind(this); 
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
  
  handleDemoSubmit(e){
    e.preventDefault();
    const demoUser = {username: "demo", password: "demopass"};  
    this.props.login(demoUser);
  }

  render() {
    //if youre logged in, show neither of these
    const errors = this.props.errors.map((error, i) => {
      return <p className="error-p" key={i}>{error}</p>
    })

    if (this.props.formType === "signup") {
      return (
        <div className="form-holder-div">
          <h2 className="signup-msg">Sign up to see photos from your friends.</h2>
          <button className="blue-button" onClick={this.handleDemoSubmit}>Demo Login</button>
          <form className="signup">
            <div className="or-block-div">
              <div className="line-div"></div>
              <div className="or-div">OR</div>
              <div className="line-div"></div>
            </div>
            <div className="signup-div">
              <label className="input-label">
                <span className={this.spanClass("email")} id="span">Email</span>
                <input className="session-input"  type="email" onChange={this.handleChange("email")} value={this.state.email} />
                <div className="x-div">
                  <i className={"far fa-times-circle " + this.xClass("Email")}></i>
                </div>
              </label>
            </div>
            <div className="signup-div">
              <label className="input-label">
                <span className={this.spanClass("full_name")} id="span">Full Name</span>
                <input className="session-input" type="text" onChange={this.handleChange("full_name")} value={this.state.full_name} />
                <div className="x-div">
                  <i className={"far fa-times-circle " + this.xClass("full_name")}></i>
                </div>
              </label>
            </div>
            <div className="signup-div">
              <label className="input-label">
                <span className={this.spanClass("username")} id="span">Username</span>
                <input className="session-input" type="text" onChange={this.handleChange("username")} value={this.state.username} />
                <div className="x-div">
                  <i className={"far fa-times-circle " + this.xClass("Username")}></i>
                </div>
              </label>
            </div>
            <div className="signup-div">
              <label className="input-label">
                <span className={this.spanClass("password")} id="span">Password</span>
                <input className="session-input" type="password" onChange={this.handleChange("password")} value={this.state.password}></input>
                <div className="x-div">
                  <i className={"far fa-times-circle " + this.xClass("Password")}></i>
                </div>
              </label>
            </div>
            <div className="button-div">
              <button className="blue-button" onClick={this.handleSubmit}>Sign Up</button>
            </div>
            <div className="error-div">
              <p className="error-p">{this.errorCheck()}</p>
            </div>
            <p className="signup-tos">
              You may experience mild to extreme envy as you compare yourself to the curated and edited lives of your peers.
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
                <input className="session-input" type="text" onChange={this.handleChange("username")} value={this.state.username} />
                <div className="x-div">
                  <i className={"far fa-times-circle " + this.xClass("zxcv")}></i>
                </div>
              </label>
            </div>
            <div className="signup-div">
              <label className="input-label">
                <span className={this.spanClass("password")} id="span">Password</span>
                <input className="session-input" type="password" onChange={this.handleChange("password")} value={this.state.password}></input>
                <div className="x-div">
                  <i className={"far fa-times-circle " + this.xClass("zxcv")}></i>
                </div>
              </label>
            </div>
            <div className="button-div">
              <button className="blue-button" onClick={this.handleSubmit}>Log In</button>
            </div>
            <div className="or-block-div">
              <div className="line-div"></div>
              <div className="or-div">OR</div>
              <div className="line-div"></div>
            </div>
            <div className="login-form-demo">
              <button className="login-form-demo-button" onClick={this.handleDemoSubmit}>
                Log in with demo account
              </button>
            </div>
            <div className="error-div">
              {errors}
            </div>
          </form>
        </div>
      )
    }
  }
}

export default SessionForm;