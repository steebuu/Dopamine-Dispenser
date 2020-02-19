import {connect} from 'react-redux';
import CommentIndexItem from './comment_index_item';
const msp = state => {
    const {users} = state.entities;
    return {
        users
    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(CommentIndexItem);