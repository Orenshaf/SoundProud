import React from 'react';


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
    }

    highlightPlayButton() {
        this.setState({ inPlayButton: true})
    }

    removeHighlightPlayButton() {
        this.setState({ inPlayButton: false })
    }
    

    render() {
        return (
                <img
                    className={`play-button ${this.props.playButton ? "show" : ""} ${this.state.inPlayButton ? "in-play-button" : ""} ${this.props.className === "large" ? "large" : ""}`}
                    src={window.playIcon}
                    onClick={() => this.fetchCurrentTrack(this.trackId)}
                    onMouseEnter={this.highlightPlayButton} 
                    onMouseLeave={this.removeHighlightPlayButton}
                />
            )
    }
}
    

export default TrackPlayButton;