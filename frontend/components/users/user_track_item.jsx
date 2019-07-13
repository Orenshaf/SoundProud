import React from 'react';
import TrackPlayButton from '../../components/tracks/track_play_button';
import WaveForm from '../wave_form/wave_form';
import SeekBar from '../track_player/seek_bar';
import { connect } from 'react-redux';

class UserTrackItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trackTimeStamp: null,
        }

        this.createTimeStamp = this.createTimeStamp.bind(this);
    } 

    componentDidMount() {
        this.createTrackTimeStamp()
    }

    createTrackTimeStamp() {
        const audio = new Audio();
        audio.src = this.props.track.trackUrl;

        audio.onloadedmetadata = () => {
            const duration = audio.duration;
            const trackTimeStamp = this.createTimeStamp(duration);
            this.setState({ trackTimeStamp });
        }
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


    render () {
        const track = this.props.track;
        const photo = <img className="user-showpage-track-item-photo" src={track.photoUrl} />
        
        const trackTime = this.state.trackTimeStamp ? <span className="user-showpage-track-timestamp">{this.state.trackTimeStamp}</span> : null;
        const currentTime = (this.props.currentTrack && track.id === this.props.currentTrack.id && this.props.currentTime) ? <span className="user-showpage-current-time">{this.createTimeStamp(this.props.currentTime)}</span> : null;

        let waveForm;
        if (this.props.currentTrack && track.id === this.props.currentTrack.id) {
            waveForm = <WaveForm trackUrl={track.trackUrl} active={true} waveStyle={"userShowPage"} />
        } else {
            waveForm = <WaveForm trackUrl={track.trackUrl} active={false} waveStyle={"userShowPage"} />
        } 

        let createdAt;
        const timeNow = Date.now();
        const createdTime = new Date(track.created_at);
        createdAt = Math.floor((timeNow - createdTime) / (1000 * 60 * 60 * 24));
        createdAt = createdAt < 1 ? <h1 className="user-showpage-track-time-created-at">less than one day ago</h1> : <h1 className="user-showpage-track-time-created-at">{`${createdAt} days ago`}</h1>;
        return (
            <div className="user-showpage-track-item">
                {photo}
                <div className="user-showpage-track-item-info">
                    <div className="user-showpage-track-item-info-top">
                        <div className="user-showpage-track-item-left">
                            <TrackPlayButton trackId={track.id} playButton={true} class={"small"}/>
                            <div className="user-showpage-track-item-trackinfo">
                                <p className="showpage-username">
                                    {track.username}
                                </p>
                                <p className="showpage-title">
                                    {track.title}
                                </p>
                            </div>
                        </div>
                        {createdAt}
                    </div>
                    <div className="user-showpage-waveform">
                        {waveForm}
                        <SeekBar seekBarStyle={"medium"}/>
                        {trackTime}
                        {currentTime}
                    </div>
                </div>
            </div>
        )
    }
}

const msp = (state) => ({
    currentTrack: state.ui.currentTrack,
    currentTime: state.ui.trackPlayer.currentTime,
})

export default connect(msp, null)(UserTrackItem);