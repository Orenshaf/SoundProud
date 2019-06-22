export const PLAY_MUSIC = 'PLAY_MUSIC'
export const PAUSE_MUSIC = 'PAUSE_MUSIC'


export const playMusic = playing => {
    return {
        type: PLAY_MUSIC,
        playing
    }
}

export const pauseMusic = playing => {
    return {
        type: PLAY_MUSIC,
        playing
    }
}