import React from 'react';
import { NavLink } from 'react-router-dom';
import TrackPlayButton from './track_play_button';

const TrackItem = ({track, fetchCurrentTrack}) => {
        return (
            <div className="track-item">
                <TrackPlayButton track={track} fetchCurrentTrack={fetchCurrentTrack}/>
                <NavLink className="track-item-link" to={`/${track.id}`}><h1>{track.title}</h1></NavLink>
            </div>
        )
}

export default TrackItem;
