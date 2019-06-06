import React from 'react';
import Filler from './filler';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ball: false
        }

        this.revealBall = this.revealBall.bind(this);
        this.hideBall = this.hideBall.bind(this);
    }

    revealBall() {
        this.setState({
            ball: true,
        })
    }

    hideBall() {
        this.setState({
            ball: false,
        })
    }
    
    render () {
        return (
            <div className="progress-bar-container" onMouseEnter={this.revealBall} onMouseLeave={this.hideBall}>
                <div className="progress-bar" onMouseEnter={this.revealBall} onMouseLeave={this.hideBall}>
                    <Filler percentage={this.props.percentage} />
                    <div className={`ball ${this.state.ball ? "show" : ""}`}></div>
                </div>
            </div>
        )
    }
}

export default ProgressBar;