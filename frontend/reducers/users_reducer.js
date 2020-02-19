import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_IMAGE, REMOVE_IMAGE } from '../actions/image_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

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
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);
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
      newState[followed_id].follower_ids[follower_id] = follow_id;
      return newState;
    case REMOVE_FOLLOW:
      delete newState[action.follow.follower_id].followed_ids[action.follow.followed_id];
      delete newState[action.follow.followed_id].follower_ids[action.follow.follower_id];
      return newState;
    case RECEIVE_LIKE:
      newState[action.like.user_id].liked_image_ids[action.like.image_id] = action.like.id
      return newState;
    case REMOVE_LIKE:
      delete newState[action.like.user_id].liked_image_ids[action.like.image_id];
      return newState;
    case RECEIVE_COMMENT:
      newState[action.comment.user_id].comment_ids.push(action.comment.id);
      return newState;
    case REMOVE_COMMENT:
      const comment_ids = newState[action.comment.user_id].comment_ids;
      const cIdx = comment_ids.indexOf(action.comment.id);
      comment_ids.splice(cIdx, 1);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;