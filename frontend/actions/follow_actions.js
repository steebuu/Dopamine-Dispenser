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

export const followUser = (follow) => dispatch => {
    return followAPI.follow(follow)
        .then(follow => dispatch(receiveFollow(follow)));
};

export const unfollowUser = (follow) => dispatch => {
    return followAPI.unfollow(follow)
        .then(follow => dispatch(removeFollow(follow)));
};