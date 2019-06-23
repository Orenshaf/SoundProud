import React from 'react';

class SeekBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ball: false,
        }

        this.revealBall = this.revealBall.bind(this);
        this.hideBall = this.hideBall.bind(this);
    }

    revealBall(){
        this.setState({ ball: true });
    }

    hideBall() {
        this.setState({ ball: false })
    }

    render() {
        return (
            <div className="progress-bar-container" onMouseEnter={this.revealBall} onMouseLeave={this.hideBall}>
                <div className="progress-bar-outer" onClick={this.props.changePercentage}>
                    <input ref={this.props.progressBar} type="range" min="0" max="100" className="progress-bar" onChange={this.props.handlePercentage()} />
                    <button className={`ball ${this.state.ball ? "show" : ""}`} style={{ left: `${this.props.percentage}%` }} onDrag={this.props.handlePercentage()}></button>
                </div>
            </div>
        )
    }
}

export default SeekBar;