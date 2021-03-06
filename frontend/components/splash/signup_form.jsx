import React from 'react';
import { connect } from 'react-redux'; 

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: props.loginInfo,
            password: '',
            age: '',
            gender: '',
            username: '',
            passwordErrors: [],
            ageErrors: [],
            genderErrors: [],
            usernameErrors: [],
            form: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
        this.handleNextForm = this.handleNextForm.bind(this);
        this.handleInitialSubmit = this.handleInitialSubmit.bind(this);
        this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
        this.switchModal = this.switchModal.bind(this);
        this.renderAgeErrors = this.renderAgeErrors.bind(this);
        this.renderGenderErrors = this.renderGenderErrors.bind(this);
        this.renderPasswordErrors = this.renderPasswordErrors.bind(this);
        this.renderUsernameErrors = this.renderUsernameErrors.bind(this);
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleInitialSubmit(e) {
        e.preventDefault();
        if (this.state.password.length === 0) {
            this.setState({ passwordErrors: ['Enter a password.'] })
        } else if (this.state.password.length < 6) {
            this.setState({ passwordErrors: ['Use at least 6 characters.'] })
        } else {
            this.setState({ passwordErrors: [], form: 'age-gender' });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.age.length === 0 && (this.state.gender === 'Indicate your gender' || this.state.gender === '')) {
            this.setState({ ageErrors: ['Enter your age.'], genderErrors: ['Please indicate your gender.'] })
        } else if (this.state.age.length === 0) {
            this.setState({ ageErrors: ['Enter your age.'], genderErrors: [] })
        } else if (this.state.gender === 'Indicate your gender' || this.state.gender === '') {
            this.setState({ ageErrors: [], genderErrors: ['Please indicate your gender.'] })
        } else {
            this.handleRedirect();
            this.setState({form: 'username'})
            this.props.signup(this.state);
        }
    }

    handleUsernameSubmit(e) {
        e.preventDefault();
        if (this.state.username.length === 0) {
            this.setState({ usernameErrors: ['Enter your display name. You can change it later.']})
        }

        this.props.updateUsername({id: this.props.currentUserId, username: this.state.username, email: this.state.email}).then(() => this.props.closeModal());
    }

    handleRedirect() {
        this.props.history.push('/discover');
    }

    switchModal() {
        this.props.closeModal();
        this.props.openModal('loginInfo');
    }

    renderPasswordErrors() {
        return (
            <ul>
                {this.state.passwordErrors.map((error, i) => (
                    <li id="errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    renderAgeErrors() {
        return (
            <ul>
                {this.state.ageErrors.map((error, i) => (
                    <li id="errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    renderGenderErrors() {
        return (
            <ul>
                {this.state.genderErrors.map((error, i) => (
                    <li id="errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    renderUsernameErrors() {
        return (
            <ul>
                {this.state.usernameErrors.map((error, i) => (
                    <li id="errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleNextForm(){
        switch(this.state.form) {
            case 'age-gender':
                return (
                    <div className="login-info-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <div className="login-info-form">
                                <h1 className="create-account-modal">Create your SoundProud account</h1>
                                <h3 className="choose-password">Tell us your age <span className="red-splat">*</span></h3>
                                <input
                                    type="text"
                                    value={this.state.age}
                                    onChange={this.handleChange('age')}
                                    className="login-info-input demo-login modal-item loginInfo modal-buttons"
                                />
                                {this.renderAgeErrors()}
                                <h3 className="choose-password gender">Gender <span className="red-splat">*</span></h3>
                                <select className="login-info-input demo-login modal-item loginInfo" onChange={this.handleChange('gender')}>
                                    <option defaultValue='Select a gender'>Indicate your gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                    <option value="Custom">Custom</option>
                                </select>
                                {this.renderGenderErrors()}
                                <input className="splash-button demo-login modal-item signup" type="submit" value="Continue" />
                            </div>
                        </form>
                    </div>
                )
            case 'username':
                return (
                    <div className="login-info-form-container">
                        <form onSubmit={this.handleUsernameSubmit} className="login-form-box">
                            <div className="login-info-form">
                                <h1 className="create-account-modal">Tell us a bit about yourself</h1>
                                <h3 className="choose-password">Choose your display name <span className="red-splat">*</span></h3>
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleChange('username')}
                                    className="login-info-input demo-login modal-item loginInfo"
                                />
                                {this.renderUsernameErrors()}
                                <p className="copyright">
                                    Your display name can be anything you like. Your name or artist name are good choices.
                                </p>
                                <input className="splash-button demo-login modal-item signup" type="submit" value="Get started" />
                            </div>
                        </form>
                    </div>
                )
            default:
                return (
                    <div className="login-info-form-container">
                        <div className="login-form-box">
                            <form className="login-info-form">
                                <h1 className="create-account-modal">Create your SoundProud account</h1>
                                <button form="" className="login-info-input demo-login modal-item loginInfo modal-buttons" onClick={this.switchModal}>&#9668; {this.state.email}</button>
                                <h3 className="choose-password modal-buttons">Choose a password <span className="red-splat">*</span></h3>
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    className="login-info-input"
                                />
                                {this.renderPasswordErrors()}
                                <p className="copyright">
                                    By signing up I accept the <span className="privacy-policy">Terms of Use</span>. I have read and understood the <span className="privacy-policy">Privacy Policy</span> and <span className="privacy-policy">Cookies Policy</span>.
                                </p>
                                <input className="splash-button demo-login modal-item" type="submit" value="Accept & Continue" onSubmit={this.handleInitialSubmit} onClick={this.handleInitialSubmit}/>
                                <div className="sign-in-question">
                                    <h3>Are you trying to sign in?</h3>
                                    <p>
                                        The email address that you entered was not found.
                                        Double-check your email address.
                                    </p>
                                </div>
    
                            </form>
                        </div>
                    </div>
                )
        }
    }

    render() {
        return this.handleNextForm()
    }
}

const msp = state => ({
    currentUserId: state.session.id
})

export default connect(msp, null)(SignupForm);