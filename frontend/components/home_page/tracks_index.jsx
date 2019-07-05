import React from 'react';
import TrackItem from './track_item';
import TrackSliderButton from './track_slider_button';

class TracksIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trackButton: "right"
        }

        if (props.limit < 11) {
            this.tracks = props.tracks.slice(0, props.limit);
        } else if (props.limit > 10) {
            this.tracks = props.tracks.slice(props.limit - 1);
        }
        


        this.slideTracks = this.slideTracks.bind(this);
    }

    slideTracks() {
        if (this.state.trackButton === "right") {
            this.setState({ trackButton: "left" })
        } else if (this.state.trackButton === "left") {
            this.setState({ trackButton: "right" })
        }
    }


    render() {
        const fetchCurrentTrack = this.props.fetchCurrentTrack;
        const includePlayButton = this.props.includePlayButton;
        const history = this.props.history;
        const tracksIndex = this.tracks.map(track => {
            return (
                <TrackItem
                    key={track.id}
                    trackId={track.id}
                    photo={track.photoUrl}
                    title={track.title}
                    fetchCurrentTrack={fetchCurrentTrack}
                    history={history}
                    includePlayButton={includePlayButton}
                />
            )
        })

        const trackSlider = this.props.trackSlider ? <TrackSliderButton slideTracks={this.slideTracks} leftRight={this.state.trackButton} /> : null;

        return (
            <>
                <div className="track-index-container">
                    <div className={`track-index ${includePlayButton ? "" : "home-page-index"}`}>
                        <div className={`track-index-inner ${this.state.trackButton === "left" ? "track-index-inner-slide" : ""} ${includePlayButton ? "" : "home-page-index"}`}>
                            {tracksIndex}
                        </div>
                    </div>
                    {trackSlider}
                </div>
            </>
        )
    }
}

export default TracksIndex;