import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomePage from './home_page';
import { logout } from '../../actions/session_actions';
import { fetchTracks } from '../../actions/track_actions';

const msp = (state, ownProps) => ({
    tracks: Object.values(state.entities.tracks),
})
const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchTracks: () => dispatch(fetchTracks())
})

export default withRouter(connect(msp, mdp)(HomePage));