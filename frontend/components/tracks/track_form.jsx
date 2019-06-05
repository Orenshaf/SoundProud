import React from 'react';

class TrackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            title: '',
            description: '',
            private: false,
            trackFile: null,
            photoFile: null,
            photoUrl: window.defaultPhoto
        }

        // this.genres = [
        //     "Alternative Rock",
        //     "Ambient",
        //     "Classical",
        //     "Country",
        //     "Dance & EDM",
        //     "Dancehall",
        //     "Deep House",
        //     "Disco",
        //     "Drum & Bass",
        //     "Dubstep",
        //     "Electronic",
        //     "Folk & Singer-Songwriter",
        //     "Hip-Hop $ Rap",
        //     "House",
        //     "Indie",
        //     "Jazz & Blues",
        //     "Latin",
        //     "Metal",
        //     "Piano",
        //     "Pop",
        //     "R&B & Soul",
        //     "Reggae",
        //     "Reggeaton",
        //     "Rock",
        //     "Sountrack",
        //     "Techno",
        //     "Trance",
        //     "Trap",
        //     "Triphop",
        //     "World"
        // ]

        this.handleFormRender = this.handleFormRender.bind(this);
        this.handleTrackFile = this.handleTrackFile.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.titleize = this.titleize.bind(this);
    }


    handleTrackFile(e) {
        this.setState({ 
            trackFile: e.currentTarget.files[0], 
            title: this.titleize(e.currentTarget.files[0].name.split('.')[0].split('-'))
        })
    }

    handlePhotoFile(e) {
        debugger;
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
            this.setState({private: !this.state.private})
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('track[user_id]', this.state.userId);
        formData.append('track[title]', this.state.title);
        formData.append('track[private]', this.state.private);
        formData.append('track[description]', this.state.description);
        formData.append('track[track_file]', this.state.trackFile);
        formData.append('track[photo]', this.state.photoFile);
        this.props.uploadTrack(formData);
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    titleize(arr) {
        let titleized;
        const titelizedArray = arr.map( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        titleized = titelizedArray.join(' ');
        return titleized
    }
    
    handleFormRender() {
        debugger;
        if (this.state.trackFile) {
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
                                <div className="track-image">
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
                                    <br/>
                                    Privacy:
                                    <br />
                                    <br/>
                                    <input type="radio" name="false" checked={this.state.private ? "" : "checked"} onChange={this.handlePrivacy} /> <label htmlFor="public"><span className="public">Public</span></label>
                                    <br />
                                    <br/>
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
        } else {
            return (
                <div className="track-form-container">
                    <div className="upload-file-container">
                        <h1>Drag and drop your tracks & albums here</h1>
                        <div className="upload-button">
                            <label htmlFor="files">
                                <p className="invisible-upload-button">or choose files to upload</p> 
                                <input id="files" type="file" onChange={this.handleTrackFile} />
                            </label>

                        </div>
                        <div className="playlist-question">
                            <input className="playlist-check" type="checkbox" />Make a playlist when multiple files are selected
                        </div>

                        <div className="private-question">
                            <label>
                                <span className="privacy">Privacy:</span> 
                                <input type="radio" name="false" checked={this.state.private ? "" : "checked"} onChange={this.handlePrivacy}/> <label htmlFor="public"><span className="public">Public</span></label>

                                <input type="radio" name="true" checked={this.state.private ? "checked" : ""} onChange={this.handlePrivacy}/> <label htmlFor="private"><span className="private">Private</span></label> 
                            </label>
                        </div>
                    </div>
                    <div className="file-type-info">
                        Provide FLAC, WAV, ALAC or AIFF for best audio quality. Learn more about high quality audio (HQ).
                    </div>
                </div>
            )
        }
    }

    render() {
        // debugger
        return this.handleFormRender();
    }
}

export default TrackForm;
