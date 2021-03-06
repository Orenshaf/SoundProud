import React from 'react';
import UserTracksIndex from './user_tracks_index';

class UserShowPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoFile: null,
        }

        this.handlePhotoFile = this.handlePhotoFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    handlePhotoFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const formData = new FormData();
        formData.append('user[id]', this.props.match.params.userId);
        formData.append('user[photo]', file);
        this.props.updateUser(formData);
    }

    render() {
        const profilePicture = this.props.user ? <img className="user-showpage-profile-picture" src={this.props.user.photoUrl}/> : null;
        const username = this.props.user ? this.props.user.username : null;
        const tracksIndex = this.props.tracks ? <UserTracksIndex tracks={this.props.tracks}/> : null;
        const profilePictureButton = this.props.user && this.props.user.id === this.props.currentUserId ? 
            <div className="image-edit-button user-showpage-image-edit-button">
                <label htmlFor="files">
                    <div className="inside">
                        <img src={window.cameraIcon} /><p>Upload image</p>
                        <input id="files" type="file" onChange={this.handlePhotoFile} />
                    </div>
                </label>
            </div> 
            :
            null;
        return (
            <div className="user-showpage">
                <div className="user-showpage-header">
                    {profilePicture}
                    {profilePictureButton}
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