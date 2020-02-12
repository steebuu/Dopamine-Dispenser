import {RECEIVE_FOLLOW, REMOVE_FOLLOW, RECEIVE_FOLLOWS} from '../actions/follow_actions';
import {RECEIVE_USER, RECEIVE_CURRENT_USER} from '../actions/user_actions';

const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_FOLLOW:
            newState[action.follow.follow_id] = action.follow
            return newState;
        case RECEIVE_FOLLOWS:
            return Object.assign({}, state, action.follows)
        case REMOVE_FOLLOW:    
            delete newState[action.follow.follow_id];
            return newState;
        case RECEIVE_USER:
            return Object.assign({}, state, action.follows)
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.follows)
        default:
            return state;
    }
};

export default followsReducer;