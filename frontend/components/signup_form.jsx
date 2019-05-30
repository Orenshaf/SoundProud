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
        // this.handleRedirect = this.handleRedirect.bind(this);
        this.handleNextForm = this.handleNextForm.bind(this);
        this.handleInitialSubmit = this.handleInitialSubmit.bind(this);
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
        this.props.signup(this.state).then(this.handleRedirect, this.handleRedirect);
    }

    handleRedirect() {
        // debugger
        if (getState().session.id) {
            this.props.history.push('/discover');
            this.props.closeModal();
        }
    }

    handleNextForm(){
        switch(this.state.form) {
            case 'age-gender':
                return (
                    <div className="login-info-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <div className="login-info-form">
                                <input
                                    type="text"
                                    value={this.state.age}
                                    onChange={this.handleChange('age')}
                                    className="login-info-input"
                                />
                                <select onChange={this.handleChange('gender')}>
                                    <option defaultValue='Select a gender'>Select a gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                    <option value="Custom">Custom</option>
                                </select>
                                <input className="login-info-submit" type="submit" value="Signup" />
                            </div>
                        </form>
                    </div>
                )
            default:
                return (
                    <div className="login-info-form-container">
                        <form onSubmit={this.handleInitialSubmit} className="login-form-box">
                            <div className="login-info-form">
                                <span>{this.state.email}</span>
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    className="login-info-input"
                                />
                                <input className="login-info-submit" type="submit" value="Signup" />
                            </div>
                        </form>
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