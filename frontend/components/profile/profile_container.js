import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import {getUser} from '../../actions/user_actions';
import { followUser, unfollowUser } from '../../actions/follow_actions'

const msp = (state, ownProps) => {
  const {users} = state.entities;
  const {userId} = ownProps.match.params;
  return {
    currentUserId: state.session.id,
    user: users[userId],
    users,
    userId,
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    getUser: id => dispatch(getUser(id)),
    followUser: (follower_id, followed_id) => dispatch(followUser(follower_id, followed_id)),
    unfollowUser: id => dispatch(unfollowUser(id))
  };
};

export default withRouter(connect(msp, mdp)(Profile));