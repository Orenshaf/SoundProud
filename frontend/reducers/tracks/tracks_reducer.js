import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../../actions/track_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_COMMENT } from '../../actions/comment_actions';
import { merge } from 'lodash';

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_TRACKS:
            newState = {};
            action.tracks.forEach( track => newState[track.id] = track);
            return merge({}, oldState, newState);
        case RECEIVE_TRACK:
            newState = {[action.track.id]: action.track};
            return merge({}, oldState, newState);
        case REMOVE_TRACK:
            newState = merge({}, oldState)
            delete newState[action.id];
            return newState;
        case RECEIVE_COMMENT:
            if (action.comment.parent_cmt_id === null) {
                newState = merge({}, oldState);
                newState[action.comment.track_id].comments.push(action.comment.id);
                return merge({}, oldState, newState);
            } else {
                return oldState;
            }
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
}

export default tracksReducer;

