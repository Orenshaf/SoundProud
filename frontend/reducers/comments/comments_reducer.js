import { RECEIVE_COMMENTS } from '../../actions/comment_actions';
import { merge } from 'lodash';

const commentsReducer = (oldState ={}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            newState = {};
            action.comments.forEach( comment => newState[comment.id] = comment);
            return merge({}, oldState, newState);
        default: 
        return oldState;
    }
}

export default commentsReducer;