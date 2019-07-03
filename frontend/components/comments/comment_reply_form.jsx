import React from 'react';
import { createComment } from '../../actions/comment_actions';

class CommentReplyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            track_time: props.trackTime,
            user_id: props.currentUserId,
            track_id: props.trackId,
        }

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
            that.props.addNewComment(that.state);
            that.resetForm();
            that.commentForm.current.blur();
        });
    }

    render() {
        return (
            <div className="comment-reply-form-container">
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.commentForm} className="comment-reply-form" type="text" placeholder="Write a reply" value={this.state.body} onChange={this.handleChange("body")} />
                </form>
            </div>
        )
    }
}

export default CommentReplyForm;