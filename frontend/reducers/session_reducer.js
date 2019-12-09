import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const _nullSession = {id: null};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {id: action.currentUser.id});
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, state, _nullSession);
    default:
      return state;
  }
};

export default SessionReducer;