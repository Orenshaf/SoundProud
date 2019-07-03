import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';


export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const fetchComments = id => dispatch => (
    CommentAPIUtil.fetchComments(id).then(payload => dispatch(receiveComments(payload)))
)

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment).then(payload => dispatch(receiveComment(payload)))
)