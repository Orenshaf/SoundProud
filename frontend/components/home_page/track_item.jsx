import React from 'react';
import { NavLink } from 'react-router-dom';
import TrackPlayButton from '../tracks/track_play_button';

class TrackItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playButton: false,
        }

        this.trackId = props.trackId;
        this.photo = props.photo;
        this.title = props.title;

        this.revealPlayButton = this.revealPlayButton.bind(this);
        this.hidePlayButton = this.hidePlayButton.bind(this);
        this.redirectToTrackShowPage = this.redirectToTrackShowPage.bind(this);
    }

    revealPlayButton() {
        this.setState({ playButton: true })
    }

    hidePlayButton() {
        this.setState({ playButton: false })
    }

    redirectToTrackShowPage() {
        this.props.history.push(`/${this.trackId}`);
    }

    render () {
        const trackPlayButton = this.props.includePlayButton ? <TrackPlayButton
            trackId={this.trackId}
            playButton={this.state.playButton}
            class={""}
        /> : null;
        return (
            <div className="track-item">
                <div className="track-item-photo-container" onMouseEnter={this.revealPlayButton} onMouseLeave={this.hidePlayButton}>
                    <img
                        className="track-item-photo"
                        src={this.photo}
                        onClick={this.redirectToTrackShowPage}
                    />
                    {trackPlayButton}
                </div>
                <NavLink className="track-item-link" to={`/${this.trackId}`}>
                    <h1>{this.title}</h1>
                </NavLink>
            </div>
        )
    }
}

export default TrackItem;