import React from 'react';
import TrackPlayButton from '../tracks/track_play_button';
import SeekBar from '../track_player/seek_bar';
import WaveForm from '../wave_form/wave_form';
import CommentForm from '../comments/comment_form';
import CommentIndex from '../comments/comment_index';

class TrackShowPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trackTimeStamp: null,
            trackId: null,
            username: null,
            title: null,
            photoUrl: null,
            userId: null,
            createdAt: null,
            trackUrl: null
        }

        this.fetchCurrentTrack = props.fetchCurrentTrack;

        this.deleteTrack = this.deleteTrack.bind(this);
        this.createTimeStamp = this.createTimeStamp.bind(this);
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId).then(payload => {
                const trackId = payload.track.id;
                const username = payload.user.username;
                const title = payload.track.title;
                const photoUrl = payload.track.photoUrl;
                const userId = payload.track.user_id;
                const createdAt = payload.track.created_at;
                const trackUrl = payload.track.trackUrl;
                this.setState({ trackId, username, title, photoUrl, userId, createdAt, trackUrl });
        }).then(() => this.createTrackTimeStamp());
    }

    componentDidUpdate() {
        if (this.state.trackId !== Number(this.props.match.params.trackId)) {
            this.props.fetchTrack(this.props.match.params.trackId).then(payload => {
                const trackId = payload.track.id;
                const username = payload.user.username;
                const title = payload.track.title;
                const photoUrl = payload.track.photoUrl;
                const userId = payload.track.user_id;
                const createdAt = payload.track.created_at;
                const trackUrl = payload.track.trackUrl
                this.setState({ trackId, username, title, photoUrl, userId, createdAt, trackUrl });
            }).then(() => this.createTrackTimeStamp());
        }
    }

    deleteTrack(){
        this.props.deleteTrack(this.state.trackId).then(() => this.props.history.push('/'))
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

    createTrackTimeStamp() {
        const audio = new Audio();
        audio.src = this.state.trackUrl;

        audio.onloadedmetadata = () => {
            const duration = audio.duration;
            const trackTimeStamp = this.createTimeStamp(duration);
            this.setState({ trackTimeStamp });
        }
    }

    render() {
        const comments = this.props.comments ? <CommentIndex comments={this.props.comments} currentUserId={this.props.currentUserId}/> : null;
        const player = this.state.trackId ? <TrackPlayButton trackId={this.state.trackId} fetchCurrentTrack={this.fetchCurrentTrack} playButton={true} className={"large"}/> : null;
        const commentForm = this.state.trackId ? <CommentForm trackId={this.state.trackId} /> : null;
        const username = this.state.username ? this.state.username : null;
        const title = this.state.title ? this.state.title : null;
        const photo = this.state.photoUrl ? <img className="track-photo" src={this.state.photoUrl}/> : null;
        const editButton = (this.state.userId === this.props.currentUserId) ? <button className="edit-button" onClick={() => this.props.openModal('trackEditForm')}><img src={window.editIcon} alt="" />Edit</button> : null;
        const trashButton = (this.state.userId === this.props.currentUserId) ? <button className="edit-button" onClick={this.deleteTrack}><img src={window.trashIcon} alt="" />Delete</button> : null;        
        const seekBar = (this.props.currentTrack && this.state.trackId === this.props.currentTrack.id) ? <SeekBar long={true} /> : <div className="empty-seek"></div>;
        let waveForm = null;
        if (this.props.currentTrack && this.state.trackId === this.props.currentTrack.id) {
            waveForm = <WaveForm trackUrl={this.state.trackUrl} active={true} />
        } else if (this.state.trackUrl) {
            waveForm = <WaveForm trackUrl={this.state.trackUrl} active={false}/>
        } 
        const currentTime = (this.props.currentTrack && this.state.trackId === this.props.currentTrack.id) ? <span className="show-current-time">{this.createTimeStamp(this.props.currentTime)}</span>  : null;
        const trackTime = this.state.trackTimeStamp ? <span className="show-track-time">{this.state.trackTimeStamp}</span> : null;
        let createdAt;
        if (this.state.createdAt) {
            const timeNow = Date.now();
            const createdTime = new Date(this.state.createdAt);
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
                <div className="show-page-bottom">
                    <div className="comment-divider">
                        {commentForm}
                        <div className="edit-buttons">
                            {editButton}
                            {trashButton}
                        </div>
                    </div>
                    {comments}
                </div>
                
            </div>
        )
    }
}

export default TrackShowPage;