import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from './nav_bar';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    const currentTrackAuthor = state.ui.currentTrack ? state.entities.users[state.ui.currentTrack.user_id].username : null;
    return {
        currentUser: state.entities.users[state.session.id] || null,
        currentTrack: state.ui.currentTrack,
        currentTrackAuthor
    }
}

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
})

export default withRouter(connect(msp, mdp)(NavBar));