import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import {getUser} from '../../actions/user_actions';

const msp = (state, ownProps) => {
  const {users} = state.entities;
  const {userId} = ownProps.match.params;
  return {
    currentUser: users[state.session.id],
    user: users[userId],
    userId
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    getUser: id => dispatch(getUser(id))
  };
};

export default withRouter(connect(msp, mdp)(Profile));