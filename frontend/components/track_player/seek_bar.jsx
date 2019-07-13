import React from 'react';
import { connect } from 'react-redux';
import { seekPercentage } from '../../actions/track_player_actions';

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
        this.progressBar.current.value = `${this.props.percentage}`
    }

    handlePercentage(e) {
        let newPercentage
        const windowSize = ((window.innerWidth - 1280) / 2);
        if (this.props.seekBarStyle) {
            newPercentage = Math.floor((((e.clientX - windowSize) - (e.currentTarget.offsetLeft * 1.5)) / (e.currentTarget.offsetWidth ) * 100));
        } else {
            newPercentage = Math.floor((((e.clientX - windowSize) - (e.currentTarget.offsetLeft * 1.25)) / (e.currentTarget.offsetWidth) * 100));
        }
        this.props.seekPercentage(newPercentage);
    }

    changeSeekPercentage() {
        const newPercentage = parseInt(this.progressBar.current.value, 10);
        this.props.seekPercentage(newPercentage);
    }

    revealBall() {
        if (this.props.seekBarStyle === undefined) {
            this.setState({ ball: true });
        }
    }

    hideBall() {
        this.setState({ ball: false })
    }

    render() {
        return (
            <div className={`progress-bar-outer ${this.props.seekBarStyle}`} onClick={(e) => this.handlePercentage(e)} onMouseEnter={this.revealBall} onMouseLeave={this.hideBall}>
                <input ref={this.progressBar} type="range" min="0" max="100" className={`progress-bar ${this.props.seekBarStyle ? "black" : ""}`} onChange={this.changeSeekPercentage} />
                <button className={`ball ${this.state.ball ? "show" : ""}`} style={{ left: `${this.props.seekBarStyle ? 0 : this.props.percentage * 0.99}%` }} onDrag={this.changeSeekPercentage}></button>
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