import React from 'react';
import TrackPlayButton from '../../components/tracks/track_play_button';

const UserTrackItem = ({track}) =>  {
    const photo = <img className="user-showpage-track-item-photo" src={track.photoUrl} />
    
    let createdAt;
    const timeNow = Date.now();
    const createdTime = new Date(track.created_at);
    createdAt = Math.floor((timeNow - createdTime) / (1000 * 60 * 60 * 24));
    createdAt = createdAt < 1 ? <h1 className="showpage-track-time-stamp">less than one day ago</h1> : <h1 className="showpage-track-time-stamp">{`${createdAt} days ago`}</h1>;
    return (
        <div className="user-showpage-track-item">
            {photo}
            <div className="user-showpage-track-item-info">
                <div className="user-showpage-track-item-info-top">
                    <div className="user-showpage-track-item-left">
                        <TrackPlayButton trackId={track.id} playButton={true} class={"small"}/>
                       <div className="user-showpage-track-item-trackinfo">
                            <p className="showpage-username">
                                {track.username}
                            </p>
                            <p className="showpage-title">
                                {track.title}
                            </p>
                       </div>
                    </div>
                    {createdAt}
                </div>
            </div>
        </div>
    )
}

export default UserTrackItem;