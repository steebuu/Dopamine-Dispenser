import { connect } from 'react-redux';
import {addComment} from '../../actions/comment_actions';
import CommentForm from './comment_form';

const msp = (state) => {
    return {
        user_id: state.session.id
    }
}

const mdp = (dispatch) => {
    return {
        addComment: (comment) => dispatch(addComment(comment))
    }
}

export default connect(msp, mdp)(CommentForm);