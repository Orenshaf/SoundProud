import React from 'react';
import TrackForm from '../tracks/track_form';

const UploadPage = props => {
    
    return (
        <div className="upload-page">
            <div className="upload-page-nav">
                <div className="upload-page-nav-buttons">
                    <button className="upload-page-nav-button">Upload</button>
                    <button className="upload-page-nav-button">Your tracks</button>
                </div>
                <button id="for-creators" className="upload-page-nav-button">For Creators on SoundProud</button>
            </div>
            <TrackForm userId={props.userId} uploadTrack={props.uploadTrack}/>
        </div>
    )
}


export default UploadPage;