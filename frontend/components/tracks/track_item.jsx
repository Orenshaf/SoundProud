import React from 'react';
import { NavLink } from 'react-router-dom';

export const TrackItem = ({track}) => {
    return (
        <div className="track-item">
            {/* <audio src={track.trackUrl} controls></audio> */}
            <img src={track.photoUrl} />
            <NavLink className="track-item-link" to={`/${track.id}`}><h1>{track.title}</h1></NavLink>
        </div>
    )
}
