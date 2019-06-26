import React from 'react';
import TracksIndex from './tracks_index';
import TrackSliderButton from './track_slider_button';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackButton: "right"
        }

        this.slideTracks = this.slideTracks.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchTracks();
    }

    slideTracks() {
        if (this.state.trackButton === "right") {
            this.setState({trackButton: "left"})
        } else if (this.state.trackButton === "left") {
            this.setState({ trackButton: "right" })
        }
    }
    
    render() {
        const fetchCurrentTrack = this.props.fetchCurrentTrack;
        const tracks = this.props.tracks.length > 0 ? <TracksIndex tracks={this.props.tracks} history={this.props.history} fetchCurrentTrack={fetchCurrentTrack} limit={10}/> : null ;
        return (
            <div className="home-page-container">
                <h1 className="track-header">More of SoundProud's music</h1>
                <p className="track-subheader">Music from some of our artists</p>

                <div className="track-index">
                    <div className={`track-index-inner ${this.state.trackButton === "left" ? "track-index-inner-slide" : ""}`}>
                        {tracks}
                    </div>
                </div>
                <TrackSliderButton slideTracks={this.slideTracks} leftRight={this.state.trackButton}/>
            </div>
        )
    }
}
export default HomePage;