import React from 'react';

class TrackEditForm extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        const trackId = props.history.location.pathname.split("/")[1];
        const track = props.tracks[trackId];
        this.state = {
            id: track.id,
            title: track.title,
            private: track.private,
            description: track.description,
            photoUrl: track.photoUrl
        }


        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit () {
        this.props.updateTrack(this.state).then(() => this.props.closeModal());
    }

    render () {
        debugger;
        return (
            <>
                {/* <div className="extra-files">

                    </div>

                    <div className="upload-prompt">

                    </div> */}
                <div className="track-form-final-container edit-form">
                    <div className="upload-form-tabs">
                        <button className="basic-info-tab">Basic Info</button>
                    </div>

                    <div className="upload-form-innards">
                        <div className="track-image-container">
                            <img className="track-image" src={this.state.photoUrl} />
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
                <div className="save-track-container edit-form-bottom">
                    <div><span className="red-splat">*</span>Required fields</div>
                    <button form="track-form" className="save-track">Save</button>
                </div>
            </>
        )
    }
}

export default TrackEditForm;