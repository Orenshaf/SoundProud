import * as TrackAPIUtil from '../util/track_api_util';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
})

export const createTrack = trackForm => dispatch => (
    TrackAPIUtil.createTrack(trackForm).then(payload => dispatch(receiveTrack))
)
