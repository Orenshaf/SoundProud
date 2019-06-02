import React from 'react';
import LoginForm from './login_form';
import SignupForm from './signup_form';

class LoginInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginInfo: '',
        };

        this.hangleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNextForm = this.handleNextForm.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.login({loginInfo: 'admin@soundproud.com', password: 'password'})
        this.props.history.push('/discover')
        this.props.closeModal();
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();
        this.props.checkLoginInfo(this.state.loginInfo).then(this.handleNextForm);
    }

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
                                <button form="" className="splash-button modal demo-login modal-item" onClick={this.demoLogin}>Demo Login</button>
                                <h2><span>or</span></h2>
                                <input
                                    type="text"
                                    value={this.state.loginInfo}
                                    onChange={this.handleChange('loginInfo')}
                                    className="login-info-input demo-login modal-item"
                                    placeholder="Your email address or profile URL *"
                                />
                                {this.renderErrors()}
                                <input className="splash-button demo-login modal-item" type="submit" value="Continue" />
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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li id="errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        // debugger;
        return this.handleNextForm()
    }
}

export default LoginInfoForm;