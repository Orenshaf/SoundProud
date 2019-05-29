import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

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

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then( payload => dispatch(receiveCurrentUser(payload)))
)

export const login = user => dispatch => (
    SessionAPIUtil.login(user).then( payload => dispatch(receiveCurrentUser(payload)))
)

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(payload => dispatch(logoutCurrentUser()))
)