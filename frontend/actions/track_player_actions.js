export const PLAY_MUSIC = 'PLAY_MUSIC';
export const PAUSE_MUSIC = 'PAUSE_MUSIC';
export const RECEIVE_TRACK_INFO = 'RECEIVE_TRACK_INFO';
export const UPDATE_CURRENT_TIME = 'UPDATE_CURRENT_TIME';

export const playMusic = () => {
    return {
        type: PLAY_MUSIC,
    }
}

export const pauseMusic = () => {
    return {
        type: PAUSE_MUSIC,
    }
}

export const receiveTrackInfo = trackInfo => {
    return {
        type: RECEIVE_TRACK_INFO,
        trackInfo
    }
}


export const updateCurrentTime = currentTime => {
    return {
        type: UPDATE_CURRENT_TIME,
        currentTime
    }
}