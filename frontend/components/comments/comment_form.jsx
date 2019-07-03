import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';

class CommentForm extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            body: "",
            track_time: null,
            user_id: props.currentUserId,
            track_id: props.trackId
        }

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
            const track_time = this.createTimeStamp(this.props.trackTimeStamp);
            this.setState({ track_time });
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
        this.props.createComment(this.state);
        this.resetForm()
    }

    resetForm() {
        this.setState({
            body: "",
            track_time: null,
        })
    }

    render() {
        return (
            <div className="comment-form-container">
                <form onSubmit={this.handleSubmit}>
                    <input className="comment-form" type="text" placeholder="Write a comment" onClick={this.setTrackTimeStamp} onChange={this.handleChange("body")}/>
                </form>
            </div>
        )
    }
}

const msp = state => ({
    trackTimeStamp: state.ui.trackPlayer.currentTime,
    currentUserId: state.session.id
})

const mdp = dispatch => ({
   createComment: (comment) => dispatch(createComment(comment))
})


export default connect(msp, mdp)(CommentForm);