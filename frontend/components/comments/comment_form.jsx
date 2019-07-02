import React from 'react';

class CommentForm extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            body: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit() {
        
    }

    render() {
        return (
            <div className="comment-form-container">
                <form onSubmit={this.handleSubmit}>
                    <input className="comment-form" type="text" placeholder="Write a comment" onChange={this.handleChange("body")}/>
                </form>
            </div>
        )
    }
}

export default CommentForm;