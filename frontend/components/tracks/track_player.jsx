import React from 'react';
import ProgessBar from './progress_bar';
import ProgressBar from './progress_bar';

class TrackPlayer extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            track: props.track,
            playing: false,
            currentTime: null,
            duration: null,
            percentage: 0,
        }
    
        this.audioPlayer = React.createRef();

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.playback = this.playback.bind(this);
        this.createTimeStamp = this.createTimeStamp.bind(this);
    }

    componentDidMount() {
        debugger;
        this.audioPlayer.current.onloadedmetadata = () => {
            const duration = this.createTimeStamp(this.audioPlayer.current.duration);
            this.play()
            this.setState({duration});
        }

        this.audioPlayer.current.ontimeupdate = () => {
            const currentTime = this.createTimeStamp(this.audioPlayer.current.currentTime)
            this.setState({ currentTime });

            const percentage = ((this.audioPlayer.current.currentTime / this.audioPlayer.current.duration) * 100)
            if (percentage > this.state.percentage) {
                this.setState({ percentage });
            }
        }
    }

    componentDidUpdate() {
        debugger;
        if (this.state.track !== this.props.track) {
            this.play();
            this.setState({ percentage: 0, track: this.props.track})
        }
    }

    createTimeStamp(fullTime) {
        let seconds = Math.floor(fullTime);
        let hours = Math.floor(fullTime/3600);
        let minutes = Math.floor((fullTime % 3600) / 60);
        seconds = seconds % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        hours = hours < 1 ? "" : hours + ':';

        return `${hours}${minutes}:${seconds}`;
    }

    pause() {
        this.audioPlayer.current.pause();
        this.setState({ playing: false })
    }


    play() {
        this.audioPlayer.current.play();
        this.setState({playing: true})
    }

    playback() {
        this.audioPlayer.current.currentTime = 0;
        this.setState({percentage: 0});
        this.play();
    }

    render () {
        const duration = this.state.duration;
        const currentTime = this.state.currentTime;
        const playback = <img className="pause-play" src={window.playbackIcon} onClick={this.playback} />
        const playPause = this.state.playing ? <img className="pause-play" src={window.pauseIcon} onClick={this.pause} /> : <img className="pause-play" src={window.playIcon2} onClick={this.play} />
        return (
            <>
                <audio ref={this.audioPlayer} src={this.state.track.trackUrl} preload="auto"></audio>
                <div className="track-player-container">
                    <div className="track-player">
                        {playback}
                        {playPause}
                        <p className="times current-time">{currentTime}</p>
                        <div>
                            <ProgressBar percentage={this.state.percentage} />
                        </div>
                        <p className="times">{duration}</p>
                    </div>
                </div>

            </>

        )
    }
}

export default TrackPlayer;