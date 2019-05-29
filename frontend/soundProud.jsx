import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()
    const root = document.getElementById('root');
    //FOR TESTING
    window.store = store;
    window.getState = store.getState;
    window.signup = SessionAPIUtil.signup;
    window.signupCheckEmail = SessionAPIUtil.signupCheckEmail;

    window.login = SessionAPIUtil.login;
    window.loginCheckEmail = SessionAPIUtil.loginCheckEmail;
    
    window.logout = SessionAPIUtil.logout;
    //TESTING ENDS
    ReactDOM.render(<h1>Sound Proud</h1>, root);
})