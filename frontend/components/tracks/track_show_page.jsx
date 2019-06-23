import React from 'react';
import TrackPlayButton from '../tracks/track_play_button';
import SeekBar from '../track_player/seek_bar';

class TrackShowPage extends React.Component {
    constructor(props) {
        super(props);

        this.deleteTrack = this.deleteTrack.bind(this);
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId).fail(() => this.props.history.push('/discover'));;
    }

    componentDidUpdate() {
        if (!this.props.user) {
            this.props.fetchTrack(this.props.match.params.trackId).fail(() => this.props.history.push('/discover'));
        }
    }

    deleteTrack(){
        this.props.deleteTrack(this.props.track.id).then(() => this.props.history.push('/'))
    }

    render() {
        // const player = this.props.track ? <TrackPlayer trackUrl={this.props.track.trackUrl}/>: null;
        const player = this.props.track.id ? <TrackPlayButton trackId={this.props.track.id} fetchCurrentTrack={this.props.fetchCurrentTrack} inPlayButton={true} playButton={true} className={"large"}/> : null;
        const username = this.props.user ? this.props.user.username : null;
        const title = this.props.track ? this.props.track.title : null;
        const photo = this.props.track ? <img className="track-photo" src={this.props.track.photoUrl}/> : null;
        const editButton = this.props.user && this.props.track.user_id === this.props.currentUserId ? <button className="edit-button" onClick={() => this.props.openModal('trackEditForm')}><img src={window.editIcon} alt="" />Edit</button> : null;
        const trashButton = this.props.user && this.props.track.user_id === this.props.currentUserId ? <button className="edit-button" onClick={this.deleteTrack}><img src={window.trashIcon} alt="" />Delete</button> : null;        
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
                        <SeekBar />
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