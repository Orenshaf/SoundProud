import React from 'react';
import ProgessBar from './progress_bar';
import ProgressBar from './progress_bar';

class TrackPlayer extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            track: props.track,
            currentTime: null,
            duration: null,
            percentage: 0,
        }
    
        this.audioPlayer = React.createRef();

        this.play = this.play.bind(this);
        this.createTimeStamp = this.createTimeStamp.bind(this);
        this.updateTime = this.updateTime.bind(this);
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

    updateTime() {
        debugger;
    }

    play() {
        this.audioPlayer.current.play();

    }

    render () {
        const duration = this.state.duration;
        const currentTime = this.state.currentTime;
        return (
            <>
                <audio ref={this.audioPlayer} src={this.state.track.trackUrl} preload="auto"></audio>
                <div className="track-player-container">
                    <div className="track-player">
                        <img src={window.playIcon2} onClick={this.play} />
                        <p className="times">{currentTime}</p>
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