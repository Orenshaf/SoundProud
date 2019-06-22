import React from 'react';
import { connect } from 'react-redux';
import { playMusic, pauseMusic } from '../../actions/track_player_actions';

class TrackPlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inPlayButton: false,
        }
        
        this.trackId = props.trackId;
        this.fetchCurrentTrack = props.fetchCurrentTrack;

        this.highlightPlayButton = this.highlightPlayButton.bind(this);
        this.removeHighlightPlayButton = this.removeHighlightPlayButton.bind(this);
        this.playMusic = this.playMusic.bind(this);
        this.pauseMusic = this.pauseMusic.bind(this);
    }

    highlightPlayButton() {
        this.setState({ inPlayButton: true})
    }

    removeHighlightPlayButton() {
        this.setState({ inPlayButton: false })
    }

    playMusic() {
        debugger;
        if (this.props.currentTrackId === this.trackId) {
            this.props.playMusic();
        } else {
            this.fetchCurrentTrack(this.trackId);
        }
    }

    pauseMusic() {
        this.props.pauseMusic();
    }
    
    render() {

        if (this.props.playing && this.props.currentTrackId === this.trackId) {
            return (
                <div className={`play-button show in-play-button ${this.props.className === "large" ? "large" : ""}`}>
                    <img
                        src={window.pauseIcon2}
                        onClick={this.pauseMusic}
                    />
                </div>
            )
        } else {
            return (
                <img
                    className={`play-button ${this.props.playButton ? "show" : ""} ${this.state.inPlayButton || this.props.inPlayButton ? "in-play-button" : ""} ${this.props.className === "large" ? "large" : ""}`}
                    src={window.playIcon}
                    onClick={this.playMusic}
                    // onMouseEnter={this.highlightPlayButton}
                    // onMouseLeave={this.removeHighlightPlayButton}
                />
            )
    
        }
    }
}

const msp = state => ({
    currentTrackId: state.ui.currentTrack ? state.ui.currentTrack.id : null,
    playing: state.ui.trackPlayer.playing
})

const mdp = dispatch => ({
    playMusic: () => dispatch(playMusic()),
    pauseMusic: () => dispatch(pauseMusic())
})


export default connect(msp, mdp)(TrackPlayButton);