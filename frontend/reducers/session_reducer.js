import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const _nullSession = {id: null};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const {user} = action.payload;
      const userId = Object.keys(user)[0];
      return Object.assign({}, state, {id: user[userId].id});
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default SessionReducer;