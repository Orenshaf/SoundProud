import React from 'react';

const TrackPlayer = ({trackUrl}) => {
    return (
        <audio src={trackUrl} controls></audio>
    )
}

export default TrackPlayer;