export const PLAY_MUSIC = 'PLAY_MUSIC'
export const PAUSE_MUSIC = 'PAUSE_MUSIC'


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