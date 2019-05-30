import React from 'react';

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loginInfo: props.loginInfo,
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
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

    render() {
        return (
            <div className="login-info-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-info-form">
                        <span>{this.state.loginInfo}</span>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            className="login-info-input"
                        />
                        <input className="login-info-submit" type="submit" value="Login" />
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;