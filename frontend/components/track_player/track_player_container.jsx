import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { playMusic, pauseMusic, receiveTrackInfo, updateCurrentTime } from '../../actions/track_player_actions';
import TrackPlayer from './track_player';

const msp = (state, ownProps) => {
    const currentTrack = state.ui.currentTrack;
    const playing = state.ui.trackPlayer.playing;
    const duration = state.ui.trackPlayer.duration;
    const currentTime = state.ui.trackPlayer.currentTime;
    const percentage = (currentTime / duration * 100);
    return {
        currentTrack,
        playing,
        duration,
        currentTime,
        percentage
    }
}

const mdp = dispatch => ({
    playMusic: () => dispatch(playMusic()),
    pauseMusic: () => dispatch(pauseMusic()),
    receiveTrackInfo: (trackInfo) => dispatch(receiveTrackInfo(trackInfo)),
    updateCurrentTime: (currentTime) => dispatch(updateCurrentTime(currentTime))
})

export default withRouter(connect(msp, mdp)(TrackPlayer));