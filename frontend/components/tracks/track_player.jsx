import React from 'react';

class TrackPlayer extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            duration: null
        }
        
        this.track = props.track
        this.audioPlayer = React.createRef();

        this.play = this.play.bind(this);
    }

    componentDidMount() {
        this.audioPlayer.current.onloadedmetadata = () => {
            this.setState({duration: this.audioPlayer.current.duration})
        }
    }

    play() {
        this.audioPlayer.current.play();
    }

    render () {
        const duration = this.state.duration
        return (
            <>
                <audio ref={this.audioPlayer} src={this.track.trackUrl} preload="auto"></audio>
                <div className="track-player-container">
                    <div className="track-player">
                        <img src={window.playIcon2} onClick={this.play} />
                        <p>{duration}</p>
                    </div>
                </div>

            </>

        )
    }
}

export default TrackPlayer;