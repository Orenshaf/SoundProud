import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';
import { merge } from 'lodash';

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_TRACKS:
            newState = {}
            action.tracks.forEach( track => newState[track.id] = track)
            return merge({}, oldState, newState);
        case RECEIVE_TRACK:
            // debugger;
            newState = {[action.track.id]: action.track}
            return merge({}, oldState, newState);
        default:
            return oldState;
    }
}

export default tracksReducer;

