import React from 'react';

class UserShowPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {
        const profilePicture = <div className="user-showpage-profile-picture"><span className="empty-profile">p</span> </div>
        const username = this.props.user.username;
        return (
            <div className="user-showpage-header">
                {profilePicture}
                <ul className="user-showpage-info">
                    <li className="user-showpage-username">{username}</li>
                </ul>
            </div>
        )
    }
}

export default UserShowPage;