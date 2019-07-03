import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from '../../actions/comment_actions';
import { merge } from 'lodash';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_COMMENTS:
            newState = {};
            action.comments.forEach( comment => newState[comment.id] = comment);
            return merge({}, oldState, newState);
        case RECEIVE_COMMENT:
            newState = { [action.comment.id]: action.comment };
            return merge({}, oldState, newState);
        default: 
            return oldState;
    }
}

export default commentsReducer;