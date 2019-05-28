import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    //FOR TESTING
    window.signup = SessionAPIUtil.signup
    window.login = SessionAPIUtil.login
    window.logout = SessionAPIUtil.logout
    //TESTING ENDS
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Sound Proud</h1>, root);
})