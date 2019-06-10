import React from 'react';
import TracksIndex from '../tracks/tracks_index';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchTracks();
    }
    
    render() {
        const fetchCurrentTrack = this.props.fetchCurrentTrack;
        const tracks = this.props.tracks.length > 0 ? <TracksIndex tracks={this.props.tracks} history={this.props.history} fetchCurrentTrack={fetchCurrentTrack}/> : null ;
        return (
            <div className="home-page-container">
                <h1 className="track-header">More of SoundProud's music</h1>
                <p className="track-subheader">Music from some of our artists</p>

                <div className="track-index">
                    {tracks}
                </div>
            </div>
        )
    }
}
export default HomePage;