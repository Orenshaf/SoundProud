import React from 'react';

const Splash = ({currentUser, openModal}) => {
    return (
        <div className="splash-header">

            <div className="header-top">

                <div className="header-name">
                    <img src={window.soundCloudIcon} />
                    <span>SOUNDPROUD</span>
                </div>
                <div className="header-nav">
                    <button onClick={() => openModal('loginInfo')} className="splash-button sign-in">Sign in</button>
                    <button onClick={() => openModal('loginInfo')} className="splash-button create-account">Create account</button>
                    <button className="splash-button welcome">Welcome</button>
                </div>
            </div>

            <div className="header-mid">

                <div className="header-content">

                    <h1>Discover music on SoundProud</h1>
                    <p>SoundProud lets you listen to music wherever you are, with over 150 million tracks — and growing.</p>
                    <button className="splash-button demo-login">Demo Login</button>

                </div>
                
            </div>

        </div>
    )
}

export default Splash;