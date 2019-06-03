import React from 'react';

class TrackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            title: '',
            private: false,
        }
    }

    render() {
        return(
            <div className="track-form">

            </div>
        )
    }
}
