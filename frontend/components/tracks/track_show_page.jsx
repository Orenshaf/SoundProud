import React from 'react';
import TrackPlayButton from '../tracks/track_play_button';
import SeekBar from '../track_player/seek_bar';
import WaveForm from '../wave_form/wave_form';

class TrackShowPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trackTimeStamp: null,
        }

        this.deleteTrack = this.deleteTrack.bind(this);
        this.createTimeStamp = this.createTimeStamp.bind(this);
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId).fail(() => this.props.history.push('/discover'));
    }

    componentDidUpdate() {
        if (!this.state.trackTimeStamp) {
            const source = this.props.track.trackUrl
            const audio = new Audio();
            audio.src = source;
            
            audio.onloadedmetadata = () => {
                const duration = audio.duration;
                const trackTimeStamp = this.createTimeStamp(duration);
                this.setState({trackTimeStamp});
                
            }
        }
        if (!this.props.user) {
            this.props.fetchTrack(this.props.match.params.trackId).fail(() => this.props.history.push('/discover'));
        }
    }

    deleteTrack(){
        this.props.deleteTrack(this.props.track.id).then(() => this.props.history.push('/'))
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

    render() {
        // const player = this.props.track ? <TrackPlayer trackUrl={this.props.track.trackUrl}/>: null;
        const player = this.props.track.id ? <TrackPlayButton trackId={this.props.track.id} fetchCurrentTrack={this.props.fetchCurrentTrack} inPlayButton={true} playButton={true} className={"large"}/> : null;
        const username = this.props.user ? this.props.user.username : null;
        const title = this.props.track ? this.props.track.title : null;
        const photo = this.props.track ? <img className="track-photo" src={this.props.track.photoUrl}/> : null;
        const editButton = this.props.user && this.props.track.user_id === this.props.currentUserId ? <button className="edit-button" onClick={() => this.props.openModal('trackEditForm')}><img src={window.editIcon} alt="" />Edit</button> : null;
        const trashButton = this.props.user && this.props.track.user_id === this.props.currentUserId ? <button className="edit-button" onClick={this.deleteTrack}><img src={window.trashIcon} alt="" />Delete</button> : null;        
        const seekBar = ((this.props.track && this.props.currentTrack) && (this.props.track.id === this.props.currentTrack.id)) ? <SeekBar long={true} /> : <div className="empty-seek"></div>;
        let waveForm = null;
        if ((this.props.track && this.props.currentTrack) && (this.props.track.id === this.props.currentTrack.id)) {
            waveForm = <WaveForm trackUrl={this.props.track.trackUrl} active={true} />
        } else if (this.props.track.trackUrl) {
            waveForm = <WaveForm trackUrl={this.props.track.trackUrl} active={false}/>
        } 
        const currentTime = ((this.props.track && this.props.currentTrack) && (this.props.track.id === this.props.currentTrack.id)) ? <span className="show-current-time">{this.createTimeStamp(this.props.currentTime)}</span>  : null;
        const trackTime = this.state.trackTimeStamp ? <span className="show-track-time">{this.state.trackTimeStamp}</span> : null;
        let createdAt;
        if (this.props.track) {
            const timeNow = Date.now();
            const createdTime = new Date(this.props.track.created_at);
            createdAt = Math.floor((timeNow - createdTime) / (1000 * 60 * 60 * 24));
            createdAt = createdAt < 1 ? <h1 className="track-time-stamp">less than one day ago</h1> : <h1 className="track-time-stamp">{`${createdAt} days ago`}</h1>;
        } else { 
            createdAt = null;
        }
        return (
            <div className="track-show-page">
                <div className="track-show-page-container">
                    <div className="track-show-page-player-container">
                        <div className="track-show-page-player">
                            {player}
                            <ul className="track-info">
                                <li className="track-username">{username}</li>
                                <li className="track-title">{title}</li>
                            </ul>
                        </div>
                        <div id="waveform"></div>
                        {currentTime}
                        {trackTime}
                        {waveForm}
                        {seekBar}
                    </div>
                    <div className="track-photo-container">
                        {createdAt}
                        {photo}
                    </div>
                </div>
                <div className="edit-buttons">
                    {editButton}
                    {trashButton}
                </div>
                
            </div>
        )
    }
}

export default TrackShowPage;