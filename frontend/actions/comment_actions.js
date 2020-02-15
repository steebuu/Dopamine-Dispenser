import * as commentAPI from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENT";

export const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const removeComment = comment => {
    return {
        type: REMOVE_COMMENT,
        comment
    }
}

export const receiveComments = comments => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}