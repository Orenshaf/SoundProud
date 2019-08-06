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
        }

        this.fetchCurrentTrack = props.fetchCurrentTrack;

        this.deleteTrack = this.deleteTrack.bind(this);
        this.createTimeStamp = this.createTimeStamp.bind(this);
        this.redirectToUserPage = this.redirectToUserPage.bind(this);
    }

    componentDidMount() {
        this.props.clearComments();
        this.props.fetchComments(this.props.match.params.trackId);
        this.props.fetchTrack(this.props.match.params.trackId).then(() => this.createTrackTimeStamp(), () => this.props.history.push('/'));
    }

    componentDidUpdate(prevProps) {
        if (this.props.track === null) {
            this.props.clearComments();
            this.props.fetchComments(this.props.match.params.trackId);
            this.props.fetchTrack(this.props.match.params.trackId).then(() => this.createTrackTimeStamp(), () => this.props.history.push('/'));
        } else if (prevProps.track && this.props.track.id !== prevProps.track.id) {
            this.props.clearComments();
            this.props.fetchComments(this.props.match.params.trackId);
            this.props.fetchTrack(this.props.match.params.trackId).then(() => this.createTrackTimeStamp(), () => this.props.history.push('/'));
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

    createTrackTimeStamp() {
        const audio = new Audio();
        if (this.props.track) {
            audio.src = this.props.track.trackUrl;
        }

        audio.onloadedmetadata = () => {
            const duration = audio.duration;
            const trackTimeStamp = this.createTimeStamp(duration);
            this.setState({ trackTimeStamp });
        }
    }

    redirectToUserPage() {
        this.props.history.push(`/users/${this.props.user.id}`);
    }

    render() {
        const comments = this.props.track ? <CommentIndex trackId={this.props.track.id} currentUserId={this.props.currentUserId} /> : null;
        const player = this.props.track ? <TrackPlayButton trackId={this.props.track.id} fetchCurrentTrack={this.fetchCurrentTrack} playButton={true} class={"large"}/> : null;
        const commentForm = this.props.track ? <CommentForm trackId={this.props.track.id} addNewComment={this.addNewComment}/> : null;
        const username = this.props.user ? this.props.user.username : null;
        const title = this.props.track ? this.props.track.title : null;
        const photo = this.props.track ? <img className="track-photo" src={this.props.track.photoUrl}/> : null;
        const trackUserPhoto = this.props.user ? <img className="track-user-photo" src={this.props.user.photoUrl} /> : null;
        const editButton = (this.props.track && this.props.track.user_id === this.props.currentUserId) ? <button className="edit-button" onClick={() => this.props.openModal('trackEditForm')}><img src={window.editIcon} alt="" />Edit</button> : null;
        const trashButton = (this.props.track && this.props.track.user_id === this.props.currentUserId) ? <button className="edit-button" onClick={this.deleteTrack}><img src={window.trashIcon} alt="" />Delete</button> : null;        
        const seekBar = (this.props.currentTrack && this.props.track.id === this.props.currentTrack.id) ? <SeekBar seekBarStyle={"long"} /> : <div className="empty-seek"></div>;
        let waveForm;
        if (this.props.currentTrack && this.props.track.id === this.props.currentTrack.id) {
            waveForm = <WaveForm trackUrl={this.props.track.trackUrl} active={true} waveStyle={"trackShowPage"}/>
        } else if (this.props.track) {
            waveForm = <WaveForm trackUrl={this.props.track.trackUrl} active={false} waveStyle={"trackShowPage"}/>
        } 
        const currentTime = (this.props.currentTrack && this.props.track.id === this.props.currentTrack.id) ? <span className="show-current-time">{this.createTimeStamp(this.props.currentTime)}</span>  : null;
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
                                <li className="track-username" onClick={this.redirectToUserPage}>{username}</li>
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
                    <div className="show-page-bottom-bottom">
                        <div className="show-page-bottom-left">
                            {trackUserPhoto}
                            {username}
                        </div>
                        <div className="show-page-bottom-right">
                            {comments}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default TrackShowPage;