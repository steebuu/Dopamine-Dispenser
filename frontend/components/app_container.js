import { connect } from 'react-redux';
import App from './App';

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

export default connect(msp, mdp)(App);