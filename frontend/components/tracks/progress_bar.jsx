import React from 'react';
import Filler from './filler';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            percentage: props.percentage,
            ball: false
        }

        this.revealBall = this.revealBall.bind(this);
        this.hideBall = this.hideBall.bind(this);
        this.changeTrackTime = this.changeTrackTime.bind(this);
    }

    componentDidUpdate() {
        if (this.state.percentage !== this.props.percentage) {
            this.setState({ percentage: this.props.percentage});
        }
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

    changeTrackTime(event) {
        debugger;
    }
    
    render () {
        return (
            <div className="progress-bar-container" onMouseEnter={this.revealBall} onMouseLeave={this.hideBall} onMouseDown={(event) => this.changeTrackTime(event)}>
                <div className="progress-bar" onMouseEnter={this.revealBall} onMouseLeave={this.hideBall} onMouseDown={(event) => this.changeTrackTime(event)}>
                    <Filler percentage={this.state.percentage} />
                    <div className={`ball ${this.state.ball ? "show" : ""}`}></div>
                </div>
            </div>
        )
    }
}

export default ProgressBar;