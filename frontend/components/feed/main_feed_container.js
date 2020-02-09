import {connect} from "react-redux";
import {fetchImages} from "../../actions/image_actions";
import MainFeed from "./main_feed";

const msp = (state, ownProps) => {
    const {users} = state.entities;

    return {
        users,
        currentUser: users[state.session.id]
    }
}

const mdp = (dispatch) => {
    return {
        fetchImages: () => dispatch(fetchImages())
    }
}

export default connect(msp, mdp)(MainFeed);