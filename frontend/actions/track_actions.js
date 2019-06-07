import * as TrackAPIUtil from '../util/track_api_util';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';


export const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
})

export const receiveTrack = ({track, user}) => ({
    type: RECEIVE_TRACK,
    track,
    user
})

export const removeTrack = ({id}) => ({
    type: REMOVE_TRACK,
    id,
})

export const receiveCurrentTrack = ({track, user}) => ({
    type: RECEIVE_CURRENT_TRACK,
    currentTrack: track,
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

export const updateTrack = (track) => dispatch => (
    TrackAPIUtil.updateTrack(track).then(payload => dispatch(receiveTrack(payload)))
)

export const deleteTrack = id => dispatch => (
    TrackAPIUtil.deleteTrack(id).then(payload => dispatch(removeTrack(payload)))
)

export const fetchCurrentTrack = id => dispatch => (
    TrackAPIUtil.fetchTrack(id).then(payload => dispatch(receiveCurrentTrack(payload)))
)
