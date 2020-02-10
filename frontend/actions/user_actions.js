import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    user: payload.user,
    images: payload.images,
    follows: payload.follows
  };
};

export const receiveCurrentUser = (payload) => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload
  };
};

export const receiveUsers = payload => {
  return {
    type: RECEIVE_USERS
    payload
  }
}

export const getUser = id => dispatch => {
  return APIUtil.getUser(id)
    .then(payload => dispatch(receiveUser(payload)));
};

export const updateUser = id => dispatch => {
  return APIUtil.updateUser(id)
    .then(payload => dispatch(receiveUser(payload)));
}

export const getCurrentUser = id => dispatch => {
  return APIUtil.getUser(id)
    .then(payload => dispatch(receiveCurrentUser(payload)))
}

export const getAllUsers = () => dispatch => {
  return APIUtil.getAllUsers()
    .then(payload => dispatch(receiveUsers(payload)))
}