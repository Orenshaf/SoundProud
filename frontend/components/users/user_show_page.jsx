import React from 'react';

class UserShowPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTracks(this.props.match.params.userId);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default UserShowPage;