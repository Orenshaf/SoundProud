import React from 'react';
import CommentItem from './comment_item';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const comments = this.props.comments;
        const currentUserId = this.props.currentUserId;
        const trackCommentsIndex = Object.values(comments).filter(comment => comment.parent_cmt_id === null ? comment : null).map(comment => {
            return <CommentItem key={comment.id} id={comment.id} trackId={comment.track_id} username={comment.username} trackTime={comment.track_time} body={comment.body} createdAt={comment.created_at} userId={comment.user_id} currentUserId={currentUserId} photoUrl={comment.photoUrl} childComments={comment.childComments} />
        })
        return (
            <div className="comment-index-container">
                {trackCommentsIndex}
            </div>
        )
    }
}

const msp = state => {
    return {
        comments: state.entities.comments
    }
}

const mdp = dispatch => ({
    fetchComments: trackId => dispatch(fetchComments(trackId))
})

export default connect(msp, mdp)(CommentIndex);