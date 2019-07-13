import React from 'react';
import UserTracksIndex from './user_tracks_index';

class UserShowPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {
        const profilePicture = <div className="user-showpage-profile-picture"><span className="empty-profile">p</span> </div>
        const username = this.props.user ? this.props.user.username : null;
        const tracksIndex = this.props.tracks ? <UserTracksIndex tracks={this.props.tracks}/> : null;
        return (
            <div className="user-showpage">
                <div className="user-showpage-header">
                    {profilePicture}
                    <ul className="user-showpage-info">
                        <li className="user-showpage-username">{username}</li>
                    </ul>
                </div>
                <div className="show-page-bottom">
                    {tracksIndex}
                </div>
            </div>
        )
    }
}

export default UserShowPage;