import React from 'react';
import { connect } from 'react-redux';


class WaveForm extends React.Component {
    constructor(props){
        super(props);
        
        this.wavesurfer = null;
    }

    componentDidMount() {
        const interact = this.props.disabled ? false : true;
        this.wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#cdcfd1',
            progressColor: '#f50',
            cursorColor: 'transparent',
            barGraph: 10,
            barWidth: 2,
            interact
        });
        
        this.wavesurfer.load(this.props.trackUrl);

    }

    componentDidUpdate() {
        if (this.props.disabled !== true && this.props.percentage && this.wavesurfer) {
            this.wavesurfer.seekTo(this.props.percentage);
        }
    }

    render() {
        return (
            <div id="waveform">

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


