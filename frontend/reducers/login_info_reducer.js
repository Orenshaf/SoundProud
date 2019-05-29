import { RECEIVE_LOGIN_INFO } from '../actions/login_info_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const loginInfoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_LOGIN_INFO:
            newState = action.loginInfo;
            return merge({}, oldState, newState);
        case RECEIVE_CURRENT_USER:
            return {};
        default: 
            return oldState;
    }
}

export default loginInfoReducer;