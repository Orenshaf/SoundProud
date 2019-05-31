import { RECEIVE_LOGIN_INFO } from '../actions/login_info_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { CLOSE_MODAL } from '../actions/modal_actions'
import { merge } from 'lodash';

const _nullUser = Object.freeze({
    loginInfo: null
});

const loginInfoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_LOGIN_INFO:
            newState = action.loginInfo;
            return merge({}, oldState, newState);
        case RECEIVE_CURRENT_USER:
            return _nullUser
        case CLOSE_MODAL:
            return _nullUser
        default: 
            return oldState;
    }
}

export default loginInfoReducer;