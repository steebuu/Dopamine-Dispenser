import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = payload => {
  console.log(payload);
  return {
    type: RECEIVE_USER,
    user: payload.user,
    images: payload.images,
    follows: payload.follows
  };
};

export const getUser = id => dispatch => {
  return APIUtil.getUser(id)
    .then(payload => dispatch(receiveUser(payload)));
};

export const updateUser = id => dispatch => {
  return APIUtil.updateUser(id)
    .then(payload => dispatch(receiveUser(payload)));
}