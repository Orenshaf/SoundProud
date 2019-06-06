import React from 'react';

class TrackPlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playButton: false,
        }
        this.photo = props.track.photoUrl;
        this.trackId = props.track.id;
        this.fetchCurrentTrack = props.fetchCurrentTrack

        this.revealPlayButton = this.revealPlayButton.bind(this);
        this.hidePlayButton = this.hidePlayButton.bind(this);
    }

    revealPlayButton() {
        this.setState({ playButton: true })
    }

    hidePlayButton() {
        this.setState({ playButton: false })
    }

    render () {
        return (
            <div className="play-button-photo" onMouseEnter={this.revealPlayButton} onMouseLeave={this.hidePlayButton}>
                <div className="cf"></div>
                <img
                    className={`track-item-image-play ${this.state.playButton ? "show" : ""}`}
                    onClick={() => this.fetchCurrentTrack(this.trackId)}
                    src={window.playIcon}
                />
                <div className={`photo ${this.state.playButton ? "show-pos" : ""}`} >
                    <img src={this.photo} />
                </div>
            </div>
        )
    }
}

export default TrackPlayButton;