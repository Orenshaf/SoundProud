import { RECEIVE_EMAIL } from '../actions/email_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const emailReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_EMAIL:
            newState = action.email;
            return merge({}, oldState, newState);
        case RECEIVE_CURRENT_USER:
            return {};
        default: 
            return oldState;
    }
}

export default emailReducer;