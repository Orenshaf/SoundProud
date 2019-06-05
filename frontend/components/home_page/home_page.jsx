import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    
    // componentDidMount() {
    //     this.props.fetchTracks();
    // }

    handleLogout(){
        this.props.logout()
        this.props.history.push('/')
    }
    
    render() {
        // debugger;
        const tracks = this.props.tracks ? this.props.tracks.map( track => {
            // <audio src={track.trackUrl} controls></audio>
            return <li key={track.id}>{track.title}<img src={track.photoUrl} /></li>
        }) : null ;
        return (
            <div className="track-index">
                <ul>
                    {tracks}
                </ul>
            </div>
        )
    }
}
export default HomePage;