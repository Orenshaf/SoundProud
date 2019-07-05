import React from 'react';
import TrackFinalForm from './track_final_form';

class TrackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            title: '',
            private: false,
            trackFile: null,
            errors: [],
            dragFile: false
        }

        this.handleFormRender = this.handleFormRender.bind(this);
        this.handleTrackFile = this.handleTrackFile.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.titleize = this.titleize.bind(this);
        this.dragOverHandler = this.dragOverHandler.bind(this);
        this.dragLeaveHandler = this.dragLeaveHandler.bind(this);
        this.dropHandler = this.dropHandler.bind(this);
    }

    handleTrackFile(e) {
        const file = e.currentTarget.files[0];
        if (file.type.includes("audio")) {
            this.setState({
                trackFile: file,
                title: this.titleize(file.name.split('.')[0].split('-')),
                errors: [], 
                dragFile: false
            })
        } else {
            this.setState({
                errors: ['Please upload an audio file'],
                dragFile: false
            })
        }
    }

    titleize(arr) {
        let titleized;
        const titelizedArray = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        titleized = titelizedArray.join(' ');
        return titleized
    }

    handlePrivacy(e) {
        let flag = new Boolean(this.state.private);
        if (flag.toString() !== e.currentTarget.name) {
            this.setState({private: !this.state.private})
        }
    }

    dragOverHandler(e) {
        e.preventDefault();
        this.setState({ dragFile: true})
    }

    dragLeaveHandler(e) {
        e.preventDefault();
        this.setState({ dragFile: false })
    }

    dropHandler(e) {
        e.preventDefault()
        const file = e.dataTransfer.items[0].getAsFile();
        if (file.type.includes("audio")) {
            this.setState({
                trackFile: file,
                title: this.titleize(file.name.split('.')[0].split('-')),
                errors: [],
                dragFile: false
            })
        } else {
            this.setState({
                errors: ['Please upload an audio file'],
                dragFile: false
            })
        }
    }
    
    handleFormRender() {
        const errors = this.state.errors.length > 0 ? this.state.errors.map((error, i) => {
            return <li id="errors2" key={`error-${i}`}>{error}</li>
        }) : null;

        if (this.state.trackFile) {
            return <TrackFinalForm trackInfo={this.state} uploadTrack={this.props.uploadTrack} history={this.props.history}/>
        } else {
            return (
                <div className="track-form-container" onDrop={this.dropHandler} onDragOver={this.dragOverHandler}>
                    <div className="upload-file-container">
                        <h1>Drag and drop your tracks & albums here</h1>
                        {errors}
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
                    <div className={`drag-over-modal-background ${this.state.dragFile ? "show-drag-over" : ""}`} onDragLeave={this.dragLeaveHandler}>
                        <div className={`drag-over-modal-child ${this.state.dragFile ? "show-drag-over" : ""}`} >
                            <div className={`drag-over-file-upload ${this.state.dragFile ? "show-drag-over" : ""}`} >
                                Drop your files here
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return this.handleFormRender();
    }
}

export default TrackForm;
