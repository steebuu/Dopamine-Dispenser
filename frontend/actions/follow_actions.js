import * as followAPI from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";

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

export const receiveFollows = follows => {
    return {
        type: RECEIVE_FOLLOWS,
        follows
    }
}

export const followUser = (follow) => dispatch => {
    return followAPI.follow(follow)
        .then(follow => dispatch(receiveFollow(follow)));
};

export const unfollowUser = (id) => dispatch => {
    return followAPI.unfollow(id)
        .then(follow => dispatch(removeFollow(follow)));
};

export const getFollows = () => dispatch => {
    return followAPI.receiveFollows()
        .then(follows => dispatch(receiveFollows(follows)));
}