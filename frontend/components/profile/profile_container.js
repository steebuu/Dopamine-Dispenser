import { connect } from 'react-redux';
import Profile from './profile';
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(msp, mdp)(Profile);