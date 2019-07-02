import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';


export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})