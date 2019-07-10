import React from 'react';

class UserShowPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {
        debugger;
        return (
            <div>

            </div>
        )
    }
}

export default UserShowPage;