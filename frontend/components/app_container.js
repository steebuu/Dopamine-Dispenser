import { connect } from 'react-redux';
import App from './App';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logoutCurrentUser: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(App);