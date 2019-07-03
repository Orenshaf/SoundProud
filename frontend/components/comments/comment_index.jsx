import React from 'react';
import CommentItem from './comment_item';

const CommentIndex = ({comments, currentUserId}) => {
    const trackComments = comments.map(comment => {
        return <CommentItem key={comment.id} id={comment.id} trackId={comment.track_id} username={comment.username} trackTime={comment.track_time} body={comment.body} createdAt={comment.created_at} userId={comment.user_id} currentUserId={currentUserId}/>
    })
    return (
        <div className="comment-index-container">
            {trackComments}
        </div>
    )
}

export default CommentIndex;