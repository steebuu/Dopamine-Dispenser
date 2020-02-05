import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Follow from './follow';
import { followUser, unfollowUser } from '../../actions/follow_actions'

const msp = (state, ownProps) => {
    const { users } = state.entities;
    const { userId } = ownProps.match.params;
    return {
        currentUserId: state.session.id,
        user: users[userId],
        users,
        userId,
    };
}

const mdp = (dispatch) => {
    return {
        followUser: (follower_id, followed_id) => dispatch(followUser(follower_id, followed_id)),
        unfollowUser: id => dispatch(unfollowUser(id))
    }
}

export default withRouter(connect(msp, mdp)(Follow))