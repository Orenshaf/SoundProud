import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from './nav_bar';

const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id] || null,
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default withRouter(connect(msp, mdp)(NavBar));