import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        debugger
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
            return <li key={track.id}>{track.trackUrl}</li>
        }) : null ;
        debugger;
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