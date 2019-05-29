import { combineReducers } from 'redux';

import emailReducer from './email_reducer';

const uiReducer = combineReducers({
    email: emailReducer,
})

export default uiReducer;