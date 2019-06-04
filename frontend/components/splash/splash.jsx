import React from 'react';

class Splash extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            header: true,
        })

        this.intervalId = null;
    }

    componentDidMount () {
        // debugger
        setInterval(() => this.setState({header: !this.state.header}), 5000)
    }

    render () {
        // debugger
        return (
            <>
                <div className="header-top">


                    <span className="header-name"><img src={window.soundCloudIcon} /><span id="soundproud-splash">SOUNDPROUD</span></span>

                    <div className="header-nav">
                        <button onClick={() => this.props.openModal('loginInfo')} className="splash-button sign-in">Sign in</button>
                        <button onClick={() => this.props.openModal('loginInfo')} className="splash-button create-account">Create account</button>
                        <button className="splash-button welcome">For Creators</button>
                    </div>
                </div>
                <div className={`${this.state.header ? "splash-header-one" : "splash-header-two"}`}>

                    <div className="header-mid">

                        <div className="header-content">

                            <h1>Discover more music on SoundProud</h1>
                            <p>SoundProud lets you listen to music wherever you are, with over 150 million tracks — and growing.</p>
                            <button className="splash-button demo-login" onClick={() => this.props.openModal('loginInfo')}>Start Demo Login</button>

                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default Splash;