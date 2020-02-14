import {connect} from 'react-redux';
import Like from './like';
import { likeImage, unlikeImage } from '../../actions/like_actions';

const msp = (state) => {
    const { users, images } = state.entities;
    return {
        currentUser: users[state.session.id],
        images
    }
}

const mdp = (dispatch) => {
    return {
        likeImage: (like) => dispatch(likeImage(like)),
        unlikeImage: id => dispatch(unlikeImage(id)) 
    }
}

export default connect(msp, mdp)(Like);