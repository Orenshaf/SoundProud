import { combineReducers } from 'redux';

import trackPlayerReducer from './track_player/track_player_reducer';
import loginInfoReducer from './session/login_info_reducer';
import loginTypeReducer from './session/login_type_reducer';
import modalReducer from './modal/modal_reducer';
import currentTrackReducer from './current_track/current_track_reducer';

const uiReducer = combineReducers({
    loginInfo: loginInfoReducer,
    loginType: loginTypeReducer,
    modal: modalReducer,
    currentTrack: currentTrackReducer,
    trackPlayer: trackPlayerReducer
})

export default uiReducer;