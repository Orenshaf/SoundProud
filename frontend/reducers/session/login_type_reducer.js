import { RECEIVE_LOGIN_INFO } from '../../actions/login_info_actions';
import { CLOSE_MODAL } from '../../actions/modal_actions'

const loginTypeReducer = (oldState = null, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LOGIN_INFO:
            return action.loginType;
        case CLOSE_MODAL:
            return null;
        default:
            return oldState;
    }
}

export default loginTypeReducer;