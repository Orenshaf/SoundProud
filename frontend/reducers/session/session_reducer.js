import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = {id: action.currentUser.id} 
            return merge({}, oldState, newState)
        case LOGOUT_CURRENT_USER:
            console.log('reducer')
            return _nullUser;
        default:
            return oldState;
    }
}

export default sessionReducer;