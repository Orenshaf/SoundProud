import React from 'react';
import TrackPlayer from './track_player.jsx';

class TrackShowPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger;
        this.props.fetchTrack(this.props.match.params.trackId);
    }

    componentDidUpdate() {
        debugger
        if (Object.keys(this.props.track).length === 0) {
            this.props.fetchTrack(this.props.match.params.trackId);
        }
        
    }

    render() {
        debugger;
        // const player = this.props.track ? <TrackPlayer trackUrl={this.props.track.trackUrl}/>: null;
        const player = null;
        const username = this.props.user ? this.props.user.username : null;
        const title = this.props.track ? this.props.track.title : null;
        const photo = this.props.track ? <img className="track-photo" src={this.props.track.photoUrl}/> : null;
        let createdAt;
        if (this.props.track) {
            const timeNow = Date.now();
            const createdTime = new Date(this.props.track.created_at);
            createdAt = ((timeNow - createdTime) / (1000 * 60 * 60 * 24));
            createdAt = createdAt < 1 ? <h1 className="track-time-stamp">less than one day ago</h1> : <h1 className="track-time-stamp">{`${createdAt} days ago`}</h1>;
        } else { 
            createdAt = null;
        }
        return (
            <div className="track-show-page">
                <div className="track-show-page-container">
                    <div className="track-show-page-player">
                        {player}
                        <ul className="track-info">
                            <li className="track-username">{username}</li>
                            <li className="track-title">{title}</li>
                        </ul>
                    </div>
                    <div className="track-photo-container">
                        {createdAt}
                        {photo}
                    </div>
                </div>
                <button className="edit-button" onClick={() => this.props.openModal('trackEditForm')}><img src={window.editIcon} alt=""/>Edit</button>
            </div>
        )
    }
}

export default TrackShowPage;