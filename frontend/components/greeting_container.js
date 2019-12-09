import { connect } from 'react-redux';
import { receiveCurrentUser, logout } from '../actions/session_actions';
import Greeting from './greeting';

const msp = (state) => {

  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    // receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    logoutCurrentUser: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(Greeting);