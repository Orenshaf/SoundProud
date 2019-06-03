import { RECEIVE_TRACKS } from '../actions/track_actions';
import { merge } from 'lodash';

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_TRACKS:
            newState = {}
            action.tracks.forEach( track => newState[track.id] = track)
            return merge({}, oldState, newState);
        default:
            return oldState;
    }
}

export default tracksReducer;

