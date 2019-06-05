import * as TrackAPIUtil from '../util/track_api_util';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
})

export const receiveTrack = ({track, user}) => ({
    type: RECEIVE_TRACK,
    track,
    user
})

export const fetchTracks = () => dispatch => (
    TrackAPIUtil.fetchTracks().then(payload => dispatch(receiveTracks(payload)))
)

export const uploadTrack = (formTrack) => dispatch => (
    TrackAPIUtil.uploadTrack(formTrack).then(payload => dispatch(receiveTrack(payload)))
)

export const fetchTrack = id => dispatch => (
    TrackAPIUtil.fetchTrack(id).then(payload => dispatch(receiveTrack(payload)))
)
