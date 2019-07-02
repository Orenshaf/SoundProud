import React from 'react';
import { connect } from 'react-redux';

class CommentForm extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            body: "",
            trackTimeStamp: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setTrackTimeStamp = this.setTrackTimeStamp.bind(this);

    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    setTrackTimeStamp() {
        this.setState({trackTimeStamp: this.props.trackTimeStamp});
        debugger;
    }

    handleSubmit() {

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
    trackTimeStamp: state.ui.trackPlayer.currentTime
})


export default connect(msp, null)(CommentForm);