import React from 'react';

class TrackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            title: '',
            private: false,
            trackFile: null
        }

        this.handleFormRender = this.handleFormRender.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFormRender(){
        if (this.state.trackFile) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className="track-form-container">
                    <div className="upload-file-container">
                        <h1>Drag and drop your tracks & albums here</h1>
                        <input type="file" onChange={this.handleFile} />
                    </div>
                    <div className="file-type-info">
                        Provide FLAC, WAV, ALAC or AIFF for best audio quality. Learn more about high quality audio (HQ).
                    </div>
                </div>
            ) 
        }
    }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]})
    }
    

    render() {
        return this.handleFormRender();
    }
}

export default TrackForm;
