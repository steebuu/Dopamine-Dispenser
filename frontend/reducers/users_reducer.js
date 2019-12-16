import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const {currentUser} = action;
      return Object.assign({}, state, {
        [action.currentUser.id]: {id: currentUser.id, username: currentUser.username, bio: currentUser.bio, full_name: currentUser.full_name, image_ids: currentUser.image_ids}
      });

    default:
      return state;
  }
};

export default usersReducer;