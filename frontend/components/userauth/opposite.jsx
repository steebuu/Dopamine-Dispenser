import React from 'react';
import {Route, Link} from 'react-router-dom';

const Opposite = () => {
  return (
    <div className="opposite">
      <Route exact path="/signup" >
        <p className="opposite-p">
          Have an account? <Link to="/login" className="link">Log in</Link>
        </p>
      </Route>
      <Route exact path="/">
        <p className="opposite-p">
          Have an account? <Link to="/login" className="link">Log in</Link>
        </p>
      </Route>
      <Route exact path="/login">
        <p className="opposite-p">
          Don't have an account? <Link to="/signup" className="link">Sign up</Link>
        </p>
      </Route>
    </div>
  )
}

export default Opposite;
