import { RECEIVE_COMMENT } from '../../actions/comment_actions';
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
            newState = { [action.comment.id]: action.comment };
            return merge({}, oldState, newState);
        default: 
            return oldState;
    }
}

export default commentsReducer;