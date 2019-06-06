import { RECEIVE_CURRENT_TRACK } from '../actions/track_actions';

const currentTrackReducer = (oldState = null, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            return action.currentTrack;
        default:
            return oldState;
    }
}

export default currentTrackReducer;