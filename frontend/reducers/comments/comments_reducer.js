import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comment_actions';
import { RECEIVE_TRACK } from '../../actions/track_actions';
import { merge } from 'lodash';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_TRACK:
            newState = {};
            action.comments.forEach( comment => newState[comment.id] = comment);
            return merge({}, oldState, newState);
        case RECEIVE_COMMENT:
            if (action.comment.parent_cmt_id === null) {
                newState = { [action.comment.id]: action.comment };
                return merge({}, oldState, newState);
            } else {
                newState = { [action.comment.id]: action.comment };
                newState = merge({}, oldState, newState);
                newState[action.comment.parent_cmt_id].childComments.push(action.comment.id);
                return newState;
            }   
        case REMOVE_COMMENT:
            if (action.comment.parent_cmt_id === null) {
                newState = merge({}, oldState);
                delete newState[action.comment.id];
                return newState;
            } else {
                newState = merge({}, oldState);
                delete newState[action.comment.id];
                const newChildCommentArray = newState[action.comment.parent_cmt_id].childComments.filter(commentId => {
                    if (commentId !== action.comment.id) return commentId;
                })            
                newState[action.comment.parent_cmt_id].childComments = newChildCommentArray;
                return newState;
            }
        default: 
            return oldState;
    }
}

export default commentsReducer;