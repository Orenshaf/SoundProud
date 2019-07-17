import React from 'react';
import UserTracksIndex from './user_tracks_index';

class UserShowPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoFile: null,
            photoUrl: props.user.photoUrl
        }

        this.handlePhotoFile = this.handlePhotoFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    handlePhotoFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                photoFile: file, photoUrl: fileReader.result
            })
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        const profilePicture = <img className="user-showpage-profile-picture" src={this.state.photoUrl}/>
        const username = this.props.user ? this.props.user.username : null;
        const tracksIndex = this.props.tracks ? <UserTracksIndex tracks={this.props.tracks}/> : null;
        return (
            <div className="user-showpage">
                <div className="user-showpage-header">
                    {profilePicture}
                    <div className="image-edit-button user-showpage-image-edit-button">
                        <label htmlFor="files">
                            <div className="inside">
                                <img src={window.cameraIcon} /><p>Upload image</p>
                                <input id="files" type="file" onChange={this.handlePhotoFile} />
                            </div>
                        </label>
                    </div>
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