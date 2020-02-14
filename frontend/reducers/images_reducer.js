import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_IMAGE, REMOVE_IMAGE, RECEIVE_IMAGES} from '../actions/image_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { payload } = action;
      return payload.images;
    case RECEIVE_USER:
      return Object.assign({}, state, action.images);
    case RECEIVE_IMAGE:
      return Object.assign({}, state, {[action.image.id]: action.image});
    case RECEIVE_IMAGES:
      return Object.assign({}, state, action.images)
    case REMOVE_IMAGE:
      delete newState[action.image.id];
      return newState;
    case RECEIVE_LIKE:
      newState[action.like.image_id].liked_by_ids[action.like.user_id] = action.like.id;
      return newState;
    case REMOVE_LIKE:
      delete newState[action.like.image_id].liked_by_ids[action.like.user_id];
      return newState;
    default:
      return state;
  }
};

export default imagesReducer;