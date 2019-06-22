import { PLAY_MUSIC, PAUSE_MUSIC } from '../../actions/track_player_actions';
import { merge } from 'lodash';

const notPlaying = {playing: false};

const trackPlayerReducer = (oldState = notPlaying, action) => {
    let newState;
    Object.freeze(oldState);
    switch (action.type) {
        case PLAY_MUSIC:
            newState = { playing: action.playing };
            return merge({}, oldState, newState)
        case PAUSE_MUSIC:
            newState = {playing: action.playing};
        default:
            return oldState
    }
}

export default trackPlayerReducer;