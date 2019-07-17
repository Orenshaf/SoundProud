import React from 'react';
import { connect } from 'react-redux';
import { createComment, fetchComments } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';

class CommentForm extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            body: "",
            track_time: "00:00",
            user_id: props.currentUserId,
            track_id: props.trackId,
        }

        this.commentForm = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setTrackTimeStamp = this.setTrackTimeStamp.bind(this);
        this.createTimeStamp = this.createTimeStamp.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    setTrackTimeStamp() {
        if (this.state.body.length < 1) {
            let track_time; 
            if (this.state.track_id === this.props.currentTrackId) {
                if (this.props.trackTimeStamp === undefined) {
                    track_time = "00:00";
                } else {
                    track_time = this.createTimeStamp(this.props.trackTimeStamp);
                }
                this.setState({ track_time });
            } else {
                track_time = "00:00";
                this.setState({ track_time });
            }
        }
    }

    createTimeStamp(fullTime) {
        let seconds = Math.floor(fullTime);
        let hours = Math.floor(fullTime / 3600);
        let minutes = Math.floor((fullTime % 3600) / 60);
        seconds = seconds % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        hours = hours < 1 ? "" : hours + ':';

        return `${hours}${minutes}:${seconds}`;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUserId === null) {
            this.props.openModal('loginInfo');
        } else {
            const that = this;
            this.props.createComment(this.state).then(() => {
                that.resetForm();
                that.commentForm.current.blur();
                that.props.fetchComments(that.state.track_id);
            });
        }
    }

    resetForm() {
        this.setState({
            body: "",
            track_time: null,
        })
    }

    render() {
        const profilePicture = this.props.currentUser ? <img className="profile-picture-comment-form" src={this.props.currentUser.photoUrl} /> : <div className="profile-picture-comment-form"><span className="empty-profile">p</span> </div>;
        return (
            <div className="comment-form-container-outer">
                {profilePicture}
                <div className="comment-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <input ref={this.commentForm} className="comment-form" type="text" placeholder="Write a comment" value={this.state.body} onClick={this.setTrackTimeStamp} onChange={this.handleChange("body")}/>
                    </form>
                </div>
            </div>
        )
    }
}

const msp = state => {
    const currentTrackId = state.ui.currentTrack ? state.ui.currentTrack.id : null;
    const currentUser = state.session.id ? state.entities.users[state.session.id] : null;
    return {
        trackTimeStamp: state.ui.trackPlayer.currentTime,
        currentUserId: state.session.id,
        currentUser,
        currentTrackId
    }
}

const mdp = dispatch => ({
   createComment: (comment) => dispatch(createComment(comment)),
   fetchComments: (trackId) => dispatch(fetchComments(trackId)),
   openModal: (modal) => dispatch(openModal(modal))
})


export default connect(msp, mdp)(CommentForm);