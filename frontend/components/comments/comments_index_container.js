import {connect} from 'react-redux';
import { getAllComments } from '../../actions/comment_actions';
import CommentsIndex from './comments_index';

const msp = (state) => {
    const {comments} = state.entities;
    return {
        comments
    }
}

const mdp = dispatch => {
    return {
        getAllComments: () => dispatch(getAllComments())
    }
}

export default connect(msp, mdp)(CommentsIndex);