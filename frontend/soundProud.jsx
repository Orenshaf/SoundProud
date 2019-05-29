import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions';
import { checkLoginInfo } from './actions/login_info_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()
    const root = document.getElementById('root');
    //FOR TESTING
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    window.signup = signup;
    window.login = login;
    window.checkLoginInfo = checkLoginInfo;
    
    window.logout = logout;
    //TESTING ENDS
    ReactDOM.render(<Root store={store} />, root);
})