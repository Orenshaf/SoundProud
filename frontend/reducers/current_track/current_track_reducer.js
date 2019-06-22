import { RECEIVE_CURRENT_TRACK } from '../../actions/track_actions';
import { merge } from 'lodash';

const currentTrackReducer = (oldState = null, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            const userState = {username: action.user.username}
            const newState = merge({}, action.currentTrack, userState)
            return newState;
        default:
            return oldState;
    }
}

export default currentTrackReducer;