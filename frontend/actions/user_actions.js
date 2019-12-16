import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    user: payload.user,
    images: payload.images
  };
};

export const getUser = id => dispatch => {
  return APIUtil.getUser(id)
    .then(payload => dispatch(receiveUser(payload)));
};