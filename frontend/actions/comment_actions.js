import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

export const receiveComments = comments => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

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

export const clearComments = () => ({
    type: CLEAR_COMMENTS,
})


export const fetchComments = trackId => dispatch => (
    CommentAPIUtil.fetchComments(trackId).then(payload => dispatch(receiveComments(payload)))
)

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment).then(payload => dispatch(receiveComment(payload)))
)

export const deleteComment = id => dispatch => (
    CommentAPIUtil.deleteComment(id).then(payload => dispatch(removeComment(payload)))
)