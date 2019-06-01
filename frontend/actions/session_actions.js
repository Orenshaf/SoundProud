import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_USERNAME = 'RECEIVE_USERNAME';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
})

export const receiveUsername = user => ({
    type: RECEIVE_USERNAME,
    user,
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
})

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then(payload => dispatch(receiveCurrentUser(payload)), errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const login = user => dispatch => (
    SessionAPIUtil.login(user).then(payload => dispatch(receiveCurrentUser(payload)), errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(payload => dispatch(logoutCurrentUser()))
)

export const updateUsername = user => dispatch => (
    SessionAPIUtil.updateUsername(user).then( payload => dispatch(receiveUsername(payload)))
)