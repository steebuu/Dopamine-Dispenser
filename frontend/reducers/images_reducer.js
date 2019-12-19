import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_IMAGE} from '../actions/image_actions';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.currentUser.images);
    case RECEIVE_USER:
      return Object.assign({}, state, action.images);
    case RECEIVE_IMAGE:
      return Object.assign({}, state, action.image);
    case REMOVE_IMAGE:
      let newState = state;
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default imagesReducer;