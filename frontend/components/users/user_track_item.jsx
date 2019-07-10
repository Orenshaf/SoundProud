import React from 'react';
import TrackPlayButton from '../../components/tracks/track_play_button';

const UserTrackItem = ({track}) =>  {
    const photo = <img className="user-showpage-track-item-photo" src={track.photoUrl} />
    return (
        <div className="user-showpage-track-item">
            {photo}
            <div className="user-showpage-track-item-info">
                <div className="user-showpage-track-item-info-top">
                    <div className="user-showpage-track-item-left">
                        <TrackPlayButton trackId={track.id} playButton={true} class={"small"}/>
                       <div className="user-showpage-track-item-trackinfo">
                           <p>
                                {track.username}
                           </p>
                           <p>
                                {track.title}
                           </p>
                       </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserTrackItem;