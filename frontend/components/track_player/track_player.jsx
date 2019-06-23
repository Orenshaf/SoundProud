import React from 'react';
import SeekBar from './seek_bar';

class TrackPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTrack: props.currentTrack,
            currentTimeStamp: null,
            trackTimeStamp: null,
        }

        this.audioPlayer = React.createRef();

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.playback = this.playback.bind(this);
        this.createTimeStamp = this.createTimeStamp.bind(this);
        this.changePercentage = this.changePercentage.bind(this);
    }

    componentDidMount() {
        this.audioPlayer.current.onloadedmetadata = () => {
            this.props.receiveTrackInfo(this.audioPlayer.current);
            const trackTimeStamp = this.createTimeStamp(this.props.duration);
            this.play()
            this.setState({ trackTimeStamp });
        }
    }

    componentDidUpdate() {
        if (this.props.seekPercentage) {
            this.changePercentage(this.props.seekPercentage);
        } else {
            this.audioPlayer.current.ontimeupdate = () => {

                this.props.updateCurrentTime(this.audioPlayer.current.currentTime);

                const currentTimeStamp = this.createTimeStamp(this.props.currentTime);

                this.setState({ currentTimeStamp });

                if (this.props.percentage >= 99.9) {
                    this.pause();
                    this.props.updateCurrentTime(0);
                    this.audioPlayer.current.currentTime = this.props.currentTime;
                }
            }

            if (this.state.currentTrack !== this.props.currentTrack) {
                this.setState({ currentTrack: this.props.currentTrack })
                this.play()
            } else if (!this.props.playing) {
                this.audioPlayer.current.pause();
            } else if (this.props.playing) {
                this.audioPlayer.current.play();
            }
        }
    }

    changePercentage(seekPercentage) {
        let newTime = this.props.duration * (seekPercentage / 100);
        this.audioPlayer.current.currentTime = newTime;
        this.props.clearSeekPercentage();
        this.props.updateCurrentTime(newTime);
    }

    createTimeStamp(fullTime) {
        let seconds = Math.floor(fullTime);
        let hours = Math.floor(fullTime / 3600);
        let minutes = Math.floor((fullTime % 3600) / 60);
        seconds = seconds % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        hours = hours < 1 ? "" : hours + ':';

        return `${hours}${minutes}:${seconds}`;
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
        this.props.updateCurrentTime(0);
        this.audioPlayer.current.currentTime = this.props.currentTime;
        this.play();
    }

    render() {
        const author = this.state.currentTrack.username;
        const title = this.state.currentTrack.title;
        const photo = <img className="track-player-photo" src={this.state.currentTrack.photoUrl} />;

        const currentTime = this.props.currentTime ? this.createTimeStamp(this.props.currentTime) : this.createTimeStamp(0);
        const trackTime = this.props.duration ? this.createTimeStamp(this.props.duration) : this.createTimeStamp(0);
        const playback = <img className="pause-play" src={window.playbackIcon} onClick={this.playback} />
        const playPause = this.props.playing ? <img className="pause-play" src={window.pauseIcon} onClick={this.pause} /> : <img className="pause-play" src={window.playIcon2} onClick={this.play} />

        return (
            <>
                <audio ref={this.audioPlayer} src={this.state.currentTrack.trackUrl} preload="auto"></audio>
                <div className="track-player-container">
                    <div className="track-player">
                        {playback}
                        {playPause}
                        <p className="times current-time">{currentTime}</p>
                        <SeekBar />
                        <p className="times">{trackTime}</p>
                    </div>

                    <div className='track-player-info'>
                        {photo}
                        <div className="track-player-user-info">
                            <p className="author">{author}</p>
                            <p className="title" onClick={() => this.props.history.push(`/${this.state.currentTrack.id}`)}>{title}</p>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}

export default TrackPlayer;