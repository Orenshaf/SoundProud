import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER 
} from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
    id: null
});

export const SessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = action.currentUser
            return
        default:
            return oldState;
    }
}
