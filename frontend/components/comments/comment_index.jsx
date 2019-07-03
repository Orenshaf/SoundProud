import React from 'react';
import CommentItem from './comment_item';

const CommentIndex = ({comments}) => {
    const trackComments = comments.map(comment => {
        return <CommentItem key={comment.id} username={comment.username} trackTime={comment.track_time} body={comment.body} createdAt={comment.created_at}/>
    })

    return (
        <div className="comment-index-container">
            {trackComments}
        </div>
    )
}

export default CommentIndex;