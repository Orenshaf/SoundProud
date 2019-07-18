# SoundProud 
## SoundProud is a [SoundCloud](http://www.soundcloud.com/ "SoundCloud") clone. ##
Click here to visit [SoundProud](https://soundproud.herokuapp.com/#/ "SoundProud"). SoundCloud is an application for artists to upload and share their music for the masses to listen to. The official site does not utilize React, so I sought out to create a clone which does.

![Imgur](https://i.imgur.com/Vfpoby9.png)

## Technologies ##
+ React, Redux, Ruby, Rails, jQuery, PostgreSQL, and AWS S3
 
## Features ##
### On SoundProud users are able to: ###

Sign up with a personalized username. The modals were made by dispatching actions which both opened and closed the modals and allowed for users to sign in/out without refreshing the page.

![Giphy](https://media.giphy.com/media/iJmtWYxfqgU0qMgujr/giphy.gif)

SoundCloud is unique in that it's user authentication actually takes 5 steps to sign a user up. As shown in the gif above the steps are as follows:

 + First a user is prompted for an email. If the email exists, then the sign in form is rendered, otherwise the sign up form is rendered.
 + After the user gives an email and a password, they are prompted for their age and gender.
 + Finally they are signed in (in the background) and asked for a username.

The user authentication proved to be more complicated than I anticipated because most sites just ask for a username and password on one form, but SoundCloud first checks to see if the user already exists and then prompts the user for their password. Here is how I toggled between modals:

```javascript
handleNextForm() {
        switch (this.props.nextForm) {
            case 'login':
                return (
                    <LoginForm loginInfo={this.state.loginInfo} errors={this.props.errors} clearErrors={this.props.clearErrors} login={this.props.login} closeModal={this.props.closeModal} openModal={this.props.openModal} history={this.props.history} session={this.props.session}/>
                )
            case 'signup':
                return (
                    <SignupForm loginInfo={this.state.loginInfo} errors={this.props.errors} clearErrors={this.props.clearErrors} signup={this.props.signup} updateUsername={this.props.updateUsername} closeModal={this.props.closeModal} openModal={this.props.openModal} history={this.props.history} session={this.props.session}/>
                )
            default: 
                return (
                    <div className="login-info-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <div className="login-info-form">
                                <button form="" className="splash-button modal demo-login modal-item modal-buttons" onClick={this.demoLogin}>Demo Login</button>
                                <h2><span>or</span></h2>
                                <input
                                    type="text"
                                    value={this.state.loginInfo}
                                    onChange={this.handleChange('loginInfo')}
                                    className="login-info-input demo-login modal-item modal-buttons"
                                    placeholder="Your email address or profile URL *"
                                />
                                {this.renderErrors()}
                                <input className="splash-button demo-login modal-item modal-buttons" type="submit" value="Continue" />
                                <p className="need-help">Need Help?</p>
                                <p className="copyright">
                                    We may use your email and devices for updates and tips on SoundCloud's products and services, 
                                    and for activities notifications. You can unsubscribe for free at any time in your notification 
                                    settings.
                                </p>
                                <p className="copyright">
                                    We may use information you provide us in order to show you targeted ads as described in our <span className="privacy-policy">Privacy Policy.</span>
                                </p>
        
                            </div>
                        </form>
                    </div >
                )
        }
    }
```

  - - - -
  
Listen to music on SoundProud. The waveform and the trackplayer at the bottom are synchronized. 

  ![Giphy](https://media.giphy.com/media/PnrensvlfFUgoGCcCO/giphy.gif)
  
+ This was done by creating a UI slice of state to dispatch the necessary information (current track's duration, current time and whether or not it was playing) both in the track player component and on the track's show page component.

Creating a custom audio player was pretty difficult. One of the challenges I faced was making the seekbar clickable, while still being only about 1 pixel in height. In order to make it responsive on different windows I had to use the clientX and the window size in order to make sure the audio player adjusted accordingly. Here is some code I wrote to do that:

```javascript
handlePercentage(e) {
        let newPercentage
        const windowSize = ((window.innerWidth - 1280) / 2);
        if (this.props.seekBarStyle === "long") {
            newPercentage = Math.floor((((e.clientX - windowSize) - (e.currentTarget.offsetLeft * 1.5)) / (e.currentTarget.offsetWidth) * 100));
        } else if (this.props.seekBarStyle === "medium") {
            newPercentage = Math.floor((((e.clientX - windowSize) + (e.currentTarget.offsetLeft * 107)) / (e.currentTarget.offsetWidth) * 100));
        } else {
            newPercentage = Math.floor((((e.clientX - windowSize) - (e.currentTarget.offsetLeft * 1.25)) / (e.currentTarget.offsetWidth) * 100));
        }
        this.props.seekPercentage(newPercentage);
    }
```

  - - - -
## Future Directions ##
 + Users will be able to comment on tracks, but more specifically on a particular timestamp of a track.
 + Users will be able to like music.
 + Users will be able to create playlists.
 + Users will have personal pages with their music and music they liked.


 
