import { combineReducers } from 'redux';

import loginInfoReducer from './login_info_reducer';
import loginTypeReducer from './login_type_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
    loginInfo: loginInfoReducer,
    loginType: loginTypeReducer,
    modal: modalReducer,
})

export default uiReducer;