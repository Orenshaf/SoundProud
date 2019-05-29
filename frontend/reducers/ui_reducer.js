import { combineReducers } from 'redux';

import loginInfoReducer from './login_info_reducer';

const uiReducer = combineReducers({
    loginInfo: loginInfoReducer,
})

export default uiReducer;