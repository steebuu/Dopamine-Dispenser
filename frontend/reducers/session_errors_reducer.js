import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return state;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return [];
  }
};

export default sessionErrorsReducer;