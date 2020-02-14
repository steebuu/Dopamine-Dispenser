import * as likeAPI from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

export const receiveLike = like => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

export const removeLike = like => {
    return {
        type: REMOVE_LIKE,
        like
    }
}

export const receiveLikes = likes => {
    return {
        type: RECEIVE_LIKES,
        likes
    }
}

export const likeImage = like => dispatch => {
    return likeAPI.like(like)
        .then(like => dispatch(receiveLike(like)));
}

export const unlikeImage = id => dispatch => {
    return likeAPI.unlike(id)
        .then(like => dispatch(removeLike(like)));
}

export const getAllLikes = () => dispatch => {
    return likeAPI.receiveLikes()
        .then(likes => dispatch(receiveLikes(likes)));
}