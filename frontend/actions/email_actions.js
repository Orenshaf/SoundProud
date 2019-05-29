import * as EmailAPIUtil from '../util/email_api_util';
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL';

export const receiveEmail = email => ({
    type: RECEIVE_EMAIL,
    email,
})

export const checkEmail = email => dispatch => (
    EmailAPIUtil.checkEmail(email).then( payload => dispatch(receiveEmail(payload)))
)