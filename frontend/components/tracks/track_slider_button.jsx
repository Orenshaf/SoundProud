import React from 'react';

class TrackSliderButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            overButton: false
        }

        this.changeColor = this.changeColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }

    changeColor() {
        this.setState({ overButton: true })
    }

    removeColor() {
        this.setState({ overButton: false })
    }

    render () {
        return (
            <div className={`track-slider-button ${this.state.overButton ? 'orange' : ''} ${this.props.leftRight === "left" ? "left-button" : ""}`} onMouseEnter={this.changeColor} onMouseLeave={this.removeColor} onClick={this.props.slideTracks}>
                <div className={`track-slider-arrow ${this.state.overButton ? 'orange-arrow' : ''} ${this.props.leftRight === "left" ? "left-arrow" : ""}`}>

                </div>
            </div>
        )
    }
}

export default TrackSliderButton;