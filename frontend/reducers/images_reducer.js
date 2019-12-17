import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.currentUser.images);
    case RECEIVE_USER:
      return Object.assign({}, state, action.images);
    default:
      return state;
  }
};

export default imagesReducer;