import React from 'react';
import CommentItem from './comment_item';
import { connect } from 'react-redux';

const CommentIndex = (props) => {
    const trackComments = props.trackComments;
    const currentUserId = props.currentUserId;
    const comments = props.comments;
    const trackCommentsIndex = trackComments.map(commentId => {
        const comment = comments[commentId];
        return <CommentItem key={comment.id} id={comment.id} trackId={comment.track_id} username={comment.username} trackTime={comment.track_time} body={comment.body} createdAt={comment.created_at} userId={comment.user_id} currentUserId={currentUserId} childComments={comment.childComments}/>
    })
    return (
        <div className="comment-index-container">
            {trackCommentsIndex}
        </div>
    )
}

const msp = state => ({
    comments: state.entities.comments
})

export default connect(msp, null)(CommentIndex);