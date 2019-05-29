import * as LoginInfoAPIUtil from '../util/login_info_api_util';
export const RECEIVE_LOGIN_INFO = 'RECEIVE_LOGIN_INFO';

export const receiveLoginInfo = loginInfo => ({
    type: RECEIVE_LOGIN_INFO,
    loginInfo,
})

export const checkLoginInfo = loginInfo => dispatch => (
    LoginInfoAPIUtil.checkLoginInfo(loginInfo).then( payload => dispatch(receiveLoginInfo(payload)))
)