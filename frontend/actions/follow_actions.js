import * as followAPI from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollow = follow => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    };
};

export const removeFollow = follow => {
    return {
        type: REMOVE_FOLLOW,
        follow
    };
};

export const followUser = data => dispatch => {
    return followAPI.follow(data)
        .then(follow => dispatch(receiveFollow(follow)));
};

export const unfollowUser = data => dispatch => {
    return followAPI.unfollow(data)
        .then(follow => dispatch(removeFollow(follow)));
};