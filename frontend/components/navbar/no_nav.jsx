import React from 'react';
import { connect } from 'react-redux'
import TrackPlayerContainer from '../track_player/track_player_container';

const NoNav = ({currentTrack}) => {
    const footer = currentTrack ? <TrackPlayerContainer /> : null;
    return (
        <div>
            {footer}
        </div>
    )    
}

const msp = (state) => {
    return {
        currentTrack: state.ui.currentTrack
    }
}


export default connect(msp, null)(NoNav);