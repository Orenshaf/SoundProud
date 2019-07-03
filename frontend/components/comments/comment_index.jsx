import React from 'react';
import CommentItem from './comment_item';

const CommentIndex = ({comments, currentUserId, newComments}) => {
    const trackComments = comments.map(comment => {
        return <CommentItem key={comment.id} username={comment.username} trackTime={comment.track_time} body={comment.body} createdAt={comment.created_at} userId={comment.user_id} currentUserId={currentUserId}/>
    })
    const newTrackComments = newComments.map((comment, i) => {
        return <CommentItem key={i} trackTime={comment.track_time} body={comment.body} createdAt={"less than one day ago"} userId={comment.user_id} currentUserId={currentUserId}/>
    })
    return (
        <div className="comment-index-container">
            {trackComments}
            {newTrackComments}
        </div>
    )
}

export default CommentIndex;