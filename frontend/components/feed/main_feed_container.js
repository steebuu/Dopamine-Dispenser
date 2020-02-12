import {connect} from "react-redux";
import {getCurrentUser, getAllUsers} from '../../actions/user_actions';
import {fetchImages} from '../../actions/image_actions';
import {getAllFollows} from '../../actions/follow_actions';
import MainFeed from "./main_feed";

const msp = (state, ownProps) => {
    const {users, images} = state.entities;
    return {
        users,
        images,
        currentUser: users[state.session.id]
    }
}

const mdp = (dispatch) => {
    return {
        getCurrentUser: id => dispatch(getCurrentUser(id)),
        getAllUsers: () => dispatch(getAllUsers()),
        fetchImages: () => dispatch(fetchImages()),
        getAllFollows: () => dispatch(getFollows())
    }
}

export default connect(msp, mdp)(MainFeed);