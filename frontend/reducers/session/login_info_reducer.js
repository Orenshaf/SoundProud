import { RECEIVE_LOGIN_INFO } from '../../actions/login_info_actions';
import { CLOSE_MODAL } from '../../actions/modal_actions'

const loginInfoReducer = (oldState = null, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LOGIN_INFO:
            return action.loginInfo;
        case CLOSE_MODAL:
            return null;
        default: 
            return oldState;
    }
}

export default loginInfoReducer;