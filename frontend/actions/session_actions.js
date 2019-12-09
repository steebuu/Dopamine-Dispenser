import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const login = (user) => dispatch => {
  return APIUtil.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(() => dispatch(logoutCurrentUser()));
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};