import React from 'react';
import { connect } from 'react-redux';
import { seekPercentage, clearSeekTime } from '../../actions/track_player_actions';

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
        const newPercentage = parseInt(this.progressBar.current.value, 10);
        debugger;
        this.props.seekPercentage(newPercentage);
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

const msp = (state) => {
    const duration = state.ui.trackPlayer.duration;
    const currentTime = state.ui.trackPlayer.currentTime;
    const percentage = (currentTime / duration * 100);
    return {
        duration,
        currentTime,
        percentage
    }
}

const mdp = dispatch => ({
    seekPercentage: (newPercentage) => dispatch(seekPercentage(newPercentage)),
})

export default connect(msp, mdp)(SeekBar);