import { PLAY_MUSIC, PAUSE_MUSIC, RECEIVE_TRACK_INFO, UPDATE_CURRENT_TIME, SEEK_PERCENTAGE, CLEAR_SEEK_PERCENTAGE } from '../../actions/track_player_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';

const notPlaying = {playing: false, seekPercentage: null};
const nullSeekPercentage = {seekPercentage: null};

const trackPlayerReducer = (oldState = notPlaying, action) => {
    let newState;
    Object.freeze(oldState);
    switch (action.type) {
        case PLAY_MUSIC:
            newState = { playing: true };
            return merge({}, oldState, newState);
        case PAUSE_MUSIC:
            newState = { playing: false };
            return merge({}, oldState, newState);
        case RECEIVE_TRACK_INFO:
            const duration = action.trackInfo.duration;
            newState = { duration };
            return merge({}, oldState, newState);
        case UPDATE_CURRENT_TIME:
            newState = { currentTime: action.currentTime};
            return merge({}, oldState, newState);
        case SEEK_PERCENTAGE:
            newState = { seekPercentage: action.newPercentage };
            return merge({}, oldState, newState);
        case CLEAR_SEEK_PERCENTAGE:
            return merge({}, oldState, nullSeekPercentage);           
        case LOGOUT_CURRENT_USER:
            newState = { playing: false };
            return merge({}, oldState, newState);
        default:
            return oldState
    }
}

export default trackPlayerReducer;