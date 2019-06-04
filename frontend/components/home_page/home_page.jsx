import React from 'react';

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
        const tracks = this.props.tracks ? this.props.tracks.map( track => {
            // <audio src={track.trackUrl} controls></audio>
            return (
                <>
                    <li>{track.title}</li>
                    <li key={track.id}><img src={track.photoUrl}/></li>
                </>
            ) 
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