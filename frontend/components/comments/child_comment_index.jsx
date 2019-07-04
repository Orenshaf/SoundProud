import React from 'react';
import { connect } from 'react-redux';
import ChildCommentItem from './child_comment_item'

const ChildCommentIndex = (props) => {
    const childComments = props.childComments;
    const currentUserId = props.currentUserId;
    const comments = props.comments;
    const showCommentReplyForm = props.showCommentReplyForm;
    const childCommentIndexFilter = childComments.map(id => {
        return comments[id];
    }) 


    const childCommentIndex = childCommentIndexFilter.map(comment => {
        return <ChildCommentItem key={comment.id} id={comment.id} trackId={comment.track_id} username={comment.username} trackTime={comment.track_time} body={comment.body} createdAt={comment.created_at} userId={comment.user_id} currentUserId={currentUserId} showCommentReplyForm={showCommentReplyForm} />
    })
    return (
        <div className="child-comment-index-container">
            {childCommentIndex}
        </div>
    )
}

const msp = state => ({
    comments: state.entities.comments
})

export default connect(msp, null)(ChildCommentIndex);