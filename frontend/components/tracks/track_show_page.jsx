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

    render() {
        debugger;
        // const player = this.props.track ? <TrackPlayer trackUrl={this.props.track.trackUrl}/>: null;
        const player = null;
        const username = this.props.user ? this.props.user.username : null;
        const title = this.props.track ? this.props.track.title : null;
        const photo = this.props.track ? <img className="track-photo" src={this.props.track.photoUrl}/> : null;
        return (
            <div className="track-show-page-container">
                <div className="track-show-page-player">
                    {player}
                    <ul className="track-info">
                        <li className="track-username">{username}</li>
                        <li className="track-title">{title}</li>
                    </ul>
                </div>
                {photo}
            </div>
        )
    }
}

export default TrackShowPage;