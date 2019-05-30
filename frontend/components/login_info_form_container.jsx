import { connect } from 'react-redux';
import React from 'react';
import { checkLoginInfo } from '../actions/login_info_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import LoginInfoForm from './login_info_form.jsx';

const msp = state => {
    return {
        formType: 'loginInfo',
        nextForm: state.ui.loginInfo.loginType
    };
};

const mdp = dispatch => {
    return {
        processForm: (loginInfo) => dispatch(checkLoginInfo(loginInfo)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(LoginInfoForm);