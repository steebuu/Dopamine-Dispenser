import { connect } from 'react-redux';
import Splash from './splash';
import { receiveCurrentUser, logout } from '../actions/session_actions';

const msp = (state) => {
  return {
    loggedIn: Boolean(state.entities.users[state.session.id])
  };
};

const mdp = (dispatch) => {
  return {
    // receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    logoutCurrentUser: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(Splash);