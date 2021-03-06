import React from 'react';
import { connect } from 'react-redux';


class WaveForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ready: false,
        }

        this.trackUrl = props.trackUrl;
        this.waveForm = React.createRef();
        this.wavesurfer = null;
        
        this.drawWave = this.drawWave.bind(this);
    }

    componentDidMount() {
        this.drawWave();
    }

    componentDidUpdate() {
        const percentage = Number(this.props.percentage);
        if (this.props.active && this.state.ready && percentage && percentage < 1) {
            this.wavesurfer.seekTo(percentage);
        } else {
            this.wavesurfer.seekTo(0);
        }
    }

    drawWave() {
        const interact = this.props.active ? true : false;
        if (this.props.waveStyle === "trackShowPage") {
            this.wavesurfer = WaveSurfer.create({
                container: this.waveForm.current,
                waveColor: '#cdcfd1',
                progressColor: '#f50',
                cursorColor: 'transparent',
                barGraph: 10,
                barWidth: 2,
                interact
            });
        } else if (this.props.waveStyle === "userShowPage") {
            this.wavesurfer = WaveSurfer.create({
                container: this.waveForm.current,
                waveColor: '#8c8c8c',
                progressColor: '#f50',
                cursorColor: 'transparent',
                barGraph: 10,
                barWidth: 2,
                barHeight: 0.5,
                interact
            });
        }

        this.wavesurfer.load(this.trackUrl);
        this.wavesurfer.on('ready', () => {
            this.setState({ ready: true })
        })
    }

    render() {
        return (
            <div ref={this.waveForm} id={`${this.props.waveStyle === "trackShowPage" ? "waveform" : "waveform-small"}`}>

            </div>
        )
    }
}

const msp = state => {
    const duration = state.ui.trackPlayer.duration;
    const currentTime = state.ui.trackPlayer.currentTime;
    const percentage = (currentTime / duration);
    return {
        percentage
    }
}

export default connect(msp, null)(WaveForm);


