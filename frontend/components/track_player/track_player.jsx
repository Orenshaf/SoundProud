import React from 'react';
import { connect } from 'react-redux';
import { playMusic, pauseMusic } from '../../actions/track_player_actions';
import SeekBar from './seek_bar';

class TrackPlayer extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            ball: false,
            track: props.track,
            playing: false,
            currentTime: null,
            duration: null,
            percentage: 0,
        }
    
        this.audioPlayer = React.createRef();
        this.progressBar = React.createRef();

        this.revealBall = this.revealBall.bind(this);
        this.hideBall = this.hideBall.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.playback = this.playback.bind(this);
        this.createTimeStamp = this.createTimeStamp.bind(this);
        this.handlePercentage = this.handlePercentage.bind(this);
        this.changePercentage = this.changePercentage.bind(this);
    }

    componentDidMount() {
        this.audioPlayer.current.onloadedmetadata = () => {
            const duration = this.createTimeStamp(this.audioPlayer.current.duration);
            this.play()
            this.setState({duration});
        }

        if (this.progressBar.current) {
            this.progressBar.current.value = `${this.state.percentage}`
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
        if (this.state.track !== this.props.track) {
            this.props.playMusic()
            this.setState({ percentage: 0, track: this.props.track})
        } else if (!this.props.playing) {
            this.audioPlayer.current.pause();            
        } else if (this.props.playing) {
            this.audioPlayer.current.play();            
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

    revealBall(){
        this.setState({ball: true});
    }

    hideBall() {
        this.setState({ ball: false })
    }

    pause() {
        // this.audioPlayer.current.pause();
        this.props.pauseMusic();
    }


    play() {
        // this.audioPlayer.current.play();
        this.props.playMusic();
    }

    playback() {
        this.audioPlayer.current.currentTime = 0;
        this.setState({percentage: 0});
        this.play();
    }

    handlePercentage() {
        if (this.progressBar.current && this.progressBar.current.value !== `${this.state.percentage}`) {
            this.progressBar.current.value = `${this.state.percentage}`;
        }
    }

    changePercentage() {
        this.pause();
        let trackPercentage = parseInt(this.progressBar.current.value, 10)
        let newTime = this.audioPlayer.current.duration * (trackPercentage / 100);
        this.audioPlayer.current.currentTime = newTime;
        this.setState({percentage: trackPercentage})
        this.play();
    }

    render () {
        const author = this.state.track.username;
        const title = this.state.track.title;
        const photo = <img className="track-player-photo" src={this.state.track.photoUrl} />;

        const duration = this.state.duration;
        const currentTime = this.state.currentTime;
        const playback = <img className="pause-play" src={window.playbackIcon} onClick={this.playback} />
        const playPause = this.props.playing ? <img className="pause-play" src={window.pauseIcon} onClick={this.pause} /> : <img className="pause-play" src={window.playIcon2} onClick={this.play} />
        return (
            <>
                <audio ref={this.audioPlayer} src={this.state.track.trackUrl} preload="auto"></audio>
                <div className="track-player-container">
                    <div className="track-player">
                        {playback}
                        {playPause}
                        <p className="times current-time">{currentTime}</p>
                        <SeekBar 
                            revealBall={this.revealBall} 
                            hideBall={this.hideBall} 
                            changePercentage={this.changePercentage} 
                            progressBar={this.progressBar} 
                            ball={this.state.ball} 
                            percentage={this.state.percentage} 
                            handlePercentage={this.handlePercentage} 
                        />
                        <p className="times">{duration}</p>
                    </div>

                    <div className='track-player-info'>
                        {photo}
                        <div className="track-player-user-info">
                            <p className="author">{author}</p>
                            <p className="title" onClick={() => this.props.history.push(`/${this.state.track.id}`)}>{title}</p>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}

const msp = state => ({
    playing: state.ui.trackPlayer.playing
})

const mdp = dispatch => ({
    playMusic: () => dispatch(playMusic()),
    pauseMusic: () => dispatch(pauseMusic())
})

export default connect(msp, mdp)(TrackPlayer);