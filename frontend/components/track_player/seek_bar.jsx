import React from 'react';

class SeekBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ball: false,
        }

        this.progressBar = React.createRef();

        this.revealBall = this.revealBall.bind(this);
        this.hideBall = this.hideBall.bind(this);
        this.handlePercentage = this.handlePercentage.bind(this);
        this.changeSeekPercentage = this.changeSeekPercentage.bind(this);
    }

    componentDidUpdate() {
        if (this.progressBar.current) {
            this.progressBar.current.value = `${this.props.percentage}`
        }
    }

    handlePercentage() {
        if (this.progressBar.current && this.progressBar.current.value !== `${this.props.percentage}`) {
            this.progressBar.current.value = `${this.props.percentage}`;
        }
    }

    changeSeekPercentage() {
        const trackPercentage = parseInt(this.progressBar.current.value, 10);
        this.props.changePercentage(trackPercentage);
    }

    revealBall() {
        this.setState({ ball: true });
    }

    hideBall() {
        this.setState({ ball: false })
    }

    render() {
        return (
            <div className="progress-bar-container" onMouseEnter={this.revealBall} onMouseLeave={this.hideBall}>
                <div className="progress-bar-outer" onClick={this.changeSeekPercentage}>
                    <input ref={this.progressBar} type="range" min="0" max="100" className="progress-bar" onChange={this.handlePercentage()} />
                    <button className={`ball ${this.state.ball ? "show" : ""}`} style={{ left: `${this.props.percentage}%` }} onDrag={this.handlePercentage()}></button>
                </div>
            </div>
        )
    }
}

export default SeekBar;