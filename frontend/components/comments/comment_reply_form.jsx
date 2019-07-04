import React from 'react';
import { createComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';

class CommentReplyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            track_time: props.trackTime,
            user_id: props.currentUserId,
            track_id: props.trackId,
            parent_cmt_id: props.parentCommentId
        }

        this.commentReplyForm = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const that = this;
        this.props.createComment(this.state).then(() => {
            that.props.resetCommentReplyForm();
        });
    }

    render() {
        return (
            <div ref={this.commentReplyForm} className="comment-reply-form-container">
                <form onSubmit={this.handleSubmit}>
                    <input className="comment-reply-form" type="text" placeholder="Write a reply" value={this.state.body} onChange={this.handleChange("body")} />
                </form>
            </div>
        )
    }
}

const mdp = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment))
})

export default connect(null, mdp)(CommentReplyForm);