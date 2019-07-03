import React from 'react';

const CommentItem = ({username, trackTime, body, createdAt}) => {
    return (
        <div className="comment-item">
            <div className="comment-info">
                <p>{username} <span className="comment-at">at</span> {trackTime}:</p>
                <p>{createdAt}</p>
            </div>
            <div>
                <p className="comment-body">{body}</p>
            </div>
        </div>
    )
}

export default CommentItem;