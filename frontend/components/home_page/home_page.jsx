import React from 'react';
import { TrackItem } from '../tracks/track_item';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchTracks();
    }

    handleLogout(){
        this.props.logout()
        this.props.history.push('/')
    }
    
    render() {
        const tracks = this.props.tracks.length > 0 ? this.props.tracks.map( track => {
            return <TrackItem key={track.id} track={track}/>
        }) : null ;
        return (
            <div className="home-page-container">
                <div className="track-index">
                    {tracks}
                </div>
            </div>
        )
    }
}
export default HomePage;