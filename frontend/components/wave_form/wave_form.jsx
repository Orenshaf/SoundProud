import React from 'react';
import { connect } from 'react-redux';


class WaveForm extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#cdcfd1',
            progressColor: '#f50',
            cursorColor: 'transparent',
            interact: true,
            barGraph: 10,
            barWidth: 2,
        });
        wavesurfer.load(this.props.trackUrl);
    }

    render() {
        return (
            <div id="waveform">

            </div>
        )
    }
}

export default WaveForm;


