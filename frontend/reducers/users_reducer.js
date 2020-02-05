import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_IMAGE, REMOVE_IMAGE } from '../actions/image_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const {payload} = action;
      const userId = Object.keys(action.payload.user);
      return Object.assign({}, state, { [userId]: payload.user[userId] });
    case RECEIVE_USER:
      return Object.assign({}, state, action.user);
    case RECEIVE_IMAGE:
      let { user_id, id } = action.image;
      if (newState[user_id].image_ids.indexOf(id) < 0){
        newState[user_id].image_ids.push(id);
      }
      return newState;
    case REMOVE_IMAGE:
      const image_ids = newState[action.image.user_id].image_ids;
      const idx = image_ids.indexOf(action.image.id);
      image_ids.splice(idx, 1);
      return newState;
    case RECEIVE_FOLLOW:
      const { follower_id, followed_id, follow_id } = action.follow;
      newState[follower_id].followed_ids[followed_id] = follow_id;
      return newState;
    case REMOVE_FOLLOW:
      delete newState[action.follow.follower_id].followed_ids[action.follow.followed_id];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;