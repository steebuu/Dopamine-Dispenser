import {RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE} from '../actions/like_actions';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case REMOVE_LIKE:
            delete newState[action.like.id];
            return newState;
        case RECEIVE_LIKES:
            return Object.assign({}, state, action.likes);
        default:
            return state;
    }
};

export default likesReducer;