import React from 'react';

class LoginForm extends React.Component{
    constructor(props){
        // debugger
        super(props)
        this.state = {
            loginInfo: props.loginInfo,
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
        this.switchModal = this.switchModal.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleChange(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state).then(this.handleRedirect);
    }

    handleRedirect(){
        this.props.closeModal();
        this.props.history.push('/discover');
    }

    switchModal(){
        this.props.closeModal();
        this.props.openModal('loginInfo');
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
        return (
            <div className="login-info-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-info-form">
                        <button form="" className="login-info-input demo-login modal-item loginInfo modal-buttons" onClick={this.switchModal}>&#9668; {this.state.loginInfo}</button>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            className="login-info-input demo-login modal-item modal-buttons"
                            placeholder="Your Password *"
                        />
                        {this.renderErrors()}
                        <input className="splash-button demo-login modal-item" type="submit" value="Sign in" />
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;