import React from 'react';
import UserTrackItem from './user_track_item'

const UserTracksIndex = ({tracks}) => {
    const userTracks = tracks.map(track => {
        return <UserTrackItem key={track.id} track={track}/> 
    })

    return (
        <div className="user-showpage-tracks-index">
            {userTracks}
        </div>
    )
}

export default UserTracksIndex;