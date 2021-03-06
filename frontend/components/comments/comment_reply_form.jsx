import React from 'react';
import { createComment, fetchComments } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';
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
        if (this.props.currentUserId === null) {
            this.props.openModal('loginInfo');
        } else {
            const that = this;
            this.props.createComment(this.state).then(() => {
                that.props.resetCommentReplyForm();
                that.props.fetchComments(that.state.track_id);
            });
        }
    }

    render() {
        const profilePicture = this.props.currentUser ? <img className="profile-picture-comment-reply-form" src={this.props.currentUser.photoUrl} /> : <div className="profile-picture-comment-form"><span className="empty-profile">p</span> </div>;
        return (
            <div ref={this.commentReplyForm} className="comment-reply-form-container">
                <div className="comment-reply-form-inner-container">
                    {profilePicture}
                    <form id="comment-reply-form-input" onSubmit={this.handleSubmit}>
                        <input className="comment-reply-form" type="text" placeholder="Write a reply" value={this.state.body} onChange={this.handleChange("body")} />
                    </form>
                </div>
            </div>
        )
    }
}

const msp = state => {   
    const currentUser = state.session.id ? state.entities.users[state.session.id] : null;
    return {
        currentUser,

    }
}

const mdp = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    fetchComments: (trackId) => dispatch(fetchComments(trackId)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(msp, mdp)(CommentReplyForm);