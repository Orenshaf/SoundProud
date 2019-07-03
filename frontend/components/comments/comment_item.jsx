import React from 'react';

const CommentItem = ({username, trackTime, body, createdAt, userId, currentUserId}) => {
    let createdAtStamp;
    const timeNow = Date.now();
    const createdTime = new Date(createdAt);
    let rawCreatedAtStamp = (timeNow - createdTime) / (1000 * 60 * 60);
    if (rawCreatedAtStamp < 1) {
        createdAtStamp = Math.floor(rawCreatedAtStamp * 60);
        createdAtStamp = `${createdAtStamp} minutes ago`;
    } else if (rawCreatedAtStamp < 24) {
        createdAtStamp = Math.floor(rawCreatedAtStamp);
        if (createdAtStamp === 1) {
            createdAtStamp = `${createdAtStamp} hour ago`;
        } else {
            createdAtStamp = `${createdAtStamp} hours ago`;
        }
    } else {
        createdAtStamp = Math.floor((timeNow - createdTime) / (1000 * 60 * 60 * 24));
        createdAtStamp = `${createdAtStamp} days ago`;
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
                <p>{usernameStamp} <span className="comment-at">at</span> {trackTime}:</p>
                <p>{createdAtStamp}</p>
            </div>
            <div>
                <p className="comment-body">{body}</p>
            </div>
        </div>
    )
}

export default CommentItem;