import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.currentUser.images);
    default:
      return state;
  }
};

export default imagesReducer;