import * as LoginInfoAPIUtil from '../util/login_info_api_util';
export const RECEIVE_LOGIN_INFO = 'RECEIVE_LOGIN_INFO';
import { receiveErrors } from './session_actions';

export const receiveLoginInfo = ({loginInfo, loginType}) => ({
    type: RECEIVE_LOGIN_INFO,
    loginInfo,
    loginType
})

export const checkLoginInfo = loginInfo => dispatch => (
    LoginInfoAPIUtil.checkLoginInfo(loginInfo).then( payload => dispatch(receiveLoginInfo(payload)), errors => dispatch(receiveErrors(errors.responseJSON)))
)