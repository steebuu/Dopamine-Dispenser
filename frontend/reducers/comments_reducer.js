import {RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.comment.id];
            return newState;
        case RECEIVE_COMMENTS:
            return Object.assign({}, state, action.comments)
        default:
            return state;
    }
}

export default commentsReducer;