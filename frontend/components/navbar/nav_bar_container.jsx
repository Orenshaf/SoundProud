import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from './nav_bar';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id] || null,
    currentTrack: state.ui.currentTrack
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
})

export default withRouter(connect(msp, mdp)(NavBar));