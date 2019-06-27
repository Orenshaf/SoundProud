import React from 'react';
import TracksIndex from '../home_page/tracks_index';


class Splash extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            header: true,
        })

        this.intervalId = null;
    }

    componentDidMount () {
        this.intervalID = setInterval(() => this.setState({header: !this.state.header}), 5000)
        this.props.fetchTracks();
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    render () {
        const fetchCurrentTrack = this.props.fetchCurrentTrack;
        const tracks = this.props.tracks.length > 0 ? <TracksIndex tracks={this.props.tracks} history={this.props.history} fetchCurrentTrack={fetchCurrentTrack} limit={6}/> : null;
        return (
            <>
                <div className="splash-page">
                    <div className="header">
                        <div className="header-top">


                            <span className="header-name"><img src={window.soundCloudIcon} /><span id="soundproud-splash">SOUNDPROUD</span></span>

                            <div className="header-nav">
                                <button onClick={() => this.props.openModal('loginInfo')} className="splash-button sign-in">Sign in</button>
                                <button onClick={() => this.props.openModal('loginInfo')} className="splash-button create-account">Create account</button>
                                {/* <button className="splash-button welcome">For Creators</button> */}
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
                    </div>
                    <h1 className="splash-title">Hear what’s trending in the SoundProud community</h1>
                    <div className="splash-track-index">
                        {tracks}
                    </div>
                    <div className="footer">
                        <a className="github" href="https://github.com/Orenshaf"><i className="devicon-github-plain"></i></a>
                        <a className="linked-in" href="https://www.linkedin.com/in/orenshafir/"><i className="fab fa-linkedin-in"></i></a>
                        <div className="copyright">Copyright &copy; 2019 - Oren Shafir</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Splash;