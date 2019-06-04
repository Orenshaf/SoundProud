import React from 'react';
import { NavLink } from 'react-router-dom';
import TrackForm from '../tracks/track_form';

const UploadPage = props => {
    
    return (
        <div className="upload-page">
            <div className="upload-page-nav">
                <div className="upload-page-nav-links">
                    <NavLink to="/upload" className="upload-page-nav-link" activeClassName="active2">Upload</NavLink>
                    <NavLink to="/tracks" className="upload-page-nav-link" activeClassName="active2">Your tracks</NavLink>
                </div>
                <button id="for-creators" className="upload-page-nav-button">For Creators on SoundProud</button>
            </div>
            <TrackForm userId={props.userId} uploadTrack={props.uploadTrack}/>
        </div>
    )
}


export default UploadPage;