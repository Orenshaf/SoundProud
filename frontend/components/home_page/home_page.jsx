import React from 'react';
import TracksIndex from './tracks_index';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchTracks();
    }
    
    render() {
        const fetchCurrentTrack = this.props.fetchCurrentTrack;
        const tracks1 = this.props.tracks.length > 1 ? <TracksIndex tracks={this.props.tracks} history={this.props.history} fetchCurrentTrack={fetchCurrentTrack} includePlayButton={true} limit={10}/> : null ;
        const tracks2 = this.props.tracks.length > 1 ? <TracksIndex tracks={this.props.tracks} history={this.props.history} fetchCurrentTrack={fetchCurrentTrack} includePlayButton={true} limit={11} /> : null;
        if (this.props.tracks.length > 1) {
            return (
                <div className="home-page-container">
                    <h1 className="track-header">More of SoundProud's music</h1>
                    <p className="track-subheader">Music from some of our artists</p>
                    {tracks1}
                    {tracks2}
                </div>
            )
        } else {
            return null;
        }
    }
}
export default HomePage;