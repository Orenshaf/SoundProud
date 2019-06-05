import React from 'react'; 

class TrackFinalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.trackInfo.userId,
            private: this.props.trackInfo.private,
            trackFile: this.props.trackInfo.trackFile,
            title: this.props.trackInfo.title,
            description: '',
            photoFile: null,
            photoUrl: window.defaultPhoto
        }

        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
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

    handlePrivacy(e) {
        let flag = new Boolean(this.state.private);
        if (flag.toString() !== e.currentTarget.name) {
            this.setState({ private: !this.state.private })
        }
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.photoFile) {
            const formData = new FormData();
            formData.append('track[user_id]', this.state.userId);
            formData.append('track[title]', this.state.title);
            formData.append('track[private]', this.state.private);
            formData.append('track[description]', this.state.description);
            formData.append('track[track_file]', this.state.trackFile);
            formData.append('track[photo]', this.state.photoFile);
            this.props.uploadTrack(formData);
        } else {
            const formData = new FormData();
            formData.append('track[user_id]', this.state.userId);
            formData.append('track[title]', this.state.title);
            formData.append('track[private]', this.state.private);
            formData.append('track[description]', this.state.description);
            formData.append('track[track_file]', this.state.trackFile);
            this.props.uploadTrack(formData).then((arg) => {
                return this.handleRedirect(arg)
            });

        }
    }

    handleRedirect(arg) {
        return this.props.history.push(`/${arg.track.id}`);
    }

    render () {
        return (
            <>
                {/* <div className="extra-files">

                    </div>

                    <div className="upload-prompt">

                    </div> */}
                <div className="file-name">
                    <div>{this.state.trackFile.name}</div>
                    <div>Ready. Click Save to post this track.</div>
                </div>
                <div className="border blue"></div>
                <div className="border orange"></div>
                <div className="track-form-final-container">
                    <div className="upload-form-tabs">
                        <button className="basic-info-tab">Basic Info</button>
                    </div>

                    <div className="upload-form-innards">
                        <div className="track-image-container">
                            <img className="track-image" src={this.state.photoUrl} />
                            <div>
                                <input type="file" onChange={this.handlePhotoFile} />
                            </div>
                        </div>

                        <div className="upload-form-innards-form">
                            <form id="track-form" onSubmit={this.handleSubmit}>
                                <label>
                                    Title <span className="red-splat">*</span>
                                    <br />
                                    <input
                                        className="track-title-input"
                                        type="text"
                                        value={this.state.title}
                                        onChange={this.handleChange('title')}
                                    />
                                </label>
                                <label>
                                    <h4 className="description">Description</h4>
                                    <br />
                                    <textarea
                                        className="track-title-input description-input"
                                        type="textarea"
                                        value={this.state.description}
                                        onChange={this.handleChange('description')}
                                        placeholder="Describe your track"
                                    />
                                </label>
                                <br />
                                Privacy:
                                    <br />
                                <br />
                                <input type="radio" name="false" checked={this.state.private ? "" : "checked"} onChange={this.handlePrivacy} /> <label htmlFor="public"><span className="public">Public</span></label>
                                <br />
                                <br />
                                <input type="radio" name="true" checked={this.state.private ? "checked" : ""} onChange={this.handlePrivacy} /> <label htmlFor="private"><span className="public">Private</span></label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="save-track-container">
                    <div><span className="red-splat">*</span>Required fields</div>
                    <button form="track-form" className="save-track">Save</button>
                </div>
            </>
        )
    }
}

export default TrackFinalForm;