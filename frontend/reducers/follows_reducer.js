import {RECEIVE_FOLLOW, REMOVE_FOLLOW} from '../actions/follow_actions';
import {RECEIVE_USER} from '../actions/user_actions';

const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_FOLLOW:
            newState[action.follow.follow_id] = action.follow
            return newState;
        case REMOVE_FOLLOW:    
            delete newState[action.follow.follow_id];
            return newState;
        case RECEIVE_USER:
            return Object.assign({}, state, action.follows)
        default:
            return state;
    }
};

export default followsReducer;