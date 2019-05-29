import { combineReducers } from 'redux';

import loginInfoReducer from './login_info_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
    loginInfo: loginInfoReducer,
    modal: modalReducer,
})

export default uiReducer;