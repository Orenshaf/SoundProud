import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: props.loginInfo,
            password: '',
            age: '',
            gender: '',
            form: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
        this.handleNextForm = this.handleNextForm.bind(this);
        this.handleInitialSubmit = this.handleInitialSubmit.bind(this);
        this.switchModal = this.switchModal.bind(this);
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleInitialSubmit(e) {
        e.preventDefault();
        this.setState({form: 'age-gender'});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(this.handleRedirect);
    }

    handleRedirect() {
        // debugger
        this.props.history.push('/discover');
        this.props.closeModal();
    }

    switchModal() {
        this.props.closeModal();
        this.props.openModal('loginInfo');
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
                                    className="login-info-input demo-login modal-item loginInfo"
                                />
                                <h3 className="choose-password gender">Gender <span className="red-splat">*</span></h3>
                                <select className="login-info-input demo-login modal-item loginInfo" onChange={this.handleChange('gender')}>
                                    <option defaultValue='Select a gender'>Indicate your Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                    <option value="Custom">Custom</option>
                                </select>
                                <input className="splash-button demo-login modal-item signup" type="submit" value="Signup" />
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
                                <button form="" className="login-info-input demo-login modal-item loginInfo" onClick={this.switchModal}>&#9668; {this.state.email}</button>
                                <h3 className="choose-password">Choose a password <span className="red-splat">*</span></h3>
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    className="login-info-input"
                                />
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
        // debugger
        return this.handleNextForm()
    }
}

export default SignupForm;