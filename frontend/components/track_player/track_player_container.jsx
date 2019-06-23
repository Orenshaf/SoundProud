import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { playMusic, pauseMusic, receiveTrackInfo, updateCurrentTime } from '../../actions/track_player_actions';
import TrackPlayer from './track_player';

const msp = (state, ownProps) => ({
    currentTrack: state.ui.currentTrack,
    playing: state.ui.trackPlayer.playing,
    duration: state.ui.trackPlayer.duration,
    currentTime: state.ui.trackPlayer.currentTime
})

const mdp = dispatch => ({
    playMusic: () => dispatch(playMusic()),
    pauseMusic: () => dispatch(pauseMusic()),
    receiveTrackInfo: (trackInfo) => dispatch(receiveTrackInfo(trackInfo)),
    updateCurrentTime: (currentTime) => dispatch(updateCurrentTime(currentTime))
})

export default withRouter(connect(msp, mdp)(TrackPlayer));