import { connect } from 'react-redux';
import Profile from './profile';
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import {getUser} from '../../actions/user_actions';

const msp = (state, ownProps) => {
  // debugger;
  return {
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.id],
    userId: ownProps.match.params.id
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    getUser: id => dispatch(getUser(id))
  };
};

export default connect(msp, mdp)(Profile);