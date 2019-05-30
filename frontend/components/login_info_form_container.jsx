import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { checkLoginInfo } from '../actions/login_info_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import { login } from '../actions/session_actions'
import LoginInfoForm from './login_info_form.jsx';

const msp = (state, ownProps) => {
    return {
        formType: 'loginInfo',
        nextForm: state.ui.loginInfo.loginType
    };
};

const mdp = dispatch => {
    return {
        checkLoginInfo: (loginInfo) => dispatch(checkLoginInfo(loginInfo)),
        login: (user) => dispatch(login(user)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(msp, mdp)(LoginInfoForm));