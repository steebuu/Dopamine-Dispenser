import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_IMAGE, REMOVE_IMAGE} from '../actions/image_actions';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { payload } = action;
      const userId = Object.keys(action.payload.user);
      return Object.assign({}, state, payload.user[userId].images);
    case RECEIVE_USER:
      return Object.assign({}, state, action.images);
    case RECEIVE_IMAGE:
      return Object.assign({}, state, {[action.image.id]: action.image});
    case REMOVE_IMAGE:
      let newState = Object.assign({}, state);
      delete newState[action.image.id];
      return newState;
    default:
      return state;
  }
};

export default imagesReducer;