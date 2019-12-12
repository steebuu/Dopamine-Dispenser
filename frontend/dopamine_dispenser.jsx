import React from 'react';
import ReactDOM from 'react-dom';
// import * as APIUtil from './util/session_api_util';
import Root from '../frontend/components/root';
import configureStore from './store/store';
import { login, signup } from './actions/session_actions';
import {logout} from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);

  // window.login = APIUtil.login;
  // window.signup = APIUtil.signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
});