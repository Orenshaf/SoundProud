import React from 'react';

const CommentItem = ({username, trackTime, body, createdAt, userId, currentUserId}) => {
    let createdAtStamp;
    if (createdAt !== "less than one day ago") {
        const timeNow = Date.now();
        const createdTime = new Date(createdAt);
        createdAtStamp = Math.floor((timeNow - createdTime) / (1000 * 60 * 60 * 24));
        createdAtStamp = createdAtStamp < 1 ? "less than one day ago" : `${createdAtStamp} days ago`;
    } else {
        createdAtStamp = createdAt;
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