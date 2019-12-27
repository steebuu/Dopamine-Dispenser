import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UpdateUser from './update_user';
import {updateUser} from '../../actions/user_actions';

const msp = (state, ownProps) => {
    const {users} = state.entities;
    const {userId} = ownProps.match.params;
    return {
        user: users[userId],
    }
}

const mdp = (dispatch) => {
    return {
        updateUser: id => dispatch(updateUser(id)),
    }
}

export default withRouter(connect(msp, mdp)(UpdateUser));