import React from 'react';
import TrackItem from './track_item';

const TracksIndex = ({tracks, fetchCurrentTrack, history}) => {
    const tracksIndex = tracks.map(track => {
        return (
            <TrackItem 
                key={track.id} 
                trackId={track.id} 
                photo={track.photoUrl} 
                title={track.title} 
                fetchCurrentTrack={fetchCurrentTrack} 
                history={history} 
            />
        )
    })

    return tracksIndex;
}

export default TracksIndex;