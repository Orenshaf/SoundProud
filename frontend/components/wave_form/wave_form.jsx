import React from 'react';
import { connect } from 'react-redux';


class WaveForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ready: false,
        }
        this.waveForm = React.createRef();
        this.wavesurfer = null;
        
    }

    componentDidMount() {
        const interact = this.props.active ? true : false;
        this.wavesurfer = WaveSurfer.create({
            container: this.waveForm.current,
            waveColor: '#cdcfd1',
            progressColor: '#f50',
            cursorColor: 'transparent',
            barGraph: 10,
            barWidth: 2,
            interact
        });
        
        this.wavesurfer.load(this.props.trackUrl);
        this.wavesurfer.on('ready', () => {
            this.setState({ready: true})
        })
    }

    componentDidUpdate() {
        const percentage = Number(this.props.percentage);
        if (this.props.active && this.state.ready && percentage !== NaN) {
            this.wavesurfer.seekTo(percentage);
        } 
    }

    render() {
        return (
            <div ref={this.waveForm} id="waveform">

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


