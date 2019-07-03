import React from 'react';

const CommentItem = ({username, trackTime, body, createdAt, userId, currentUserId}) => {
    const timeNow = Date.now();
    const createdTime = new Date(createdAt);
    let createdAtStamp = Math.floor((timeNow - createdTime) / (1000 * 60 * 60 * 24));
    createdAtStamp = createdAtStamp < 1 ? "less than one day ago" : `${createdAtStamp} days ago`;

    let trackTimeStamp;
    if (trackTime === "NaN:NaN:NaN") {
        trackTimeStamp ="00:00";
    } else {
        trackTimeStamp = trackTime;
    }

    let usernameStamp;
    if (userId === currentUserId) {
        usernameStamp = "You"
    } else {
        usernameStamp = username;
    }
    return (
        <div className="comment-item">
            <div className="comment-info">
                <p>{usernameStamp} <span className="comment-at">at</span> {trackTimeStamp}:</p>
                <p>{createdAtStamp}</p>
            </div>
            <div>
                <p className="comment-body">{body}</p>
            </div>
        </div>
    )
}

export default CommentItem;