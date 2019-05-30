import React from 'react';
import LoginForm from './login_form'

class LoginInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginInfo: '',
        };

        this.hangleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNextForm = this.handleNextForm.bind(this);
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.checkLoginInfo(this.state.loginInfo).then(this.handleNextForm);
    }

    handleNextForm() {
        switch (this.props.nextForm) {
            case 'login':
                return (
                    <LoginForm email={this.state.loginInfo} login={this.props.login} closeModal={this.props.closeModal} history={this.props.history}/>
                )
            default: 
                return (
                    <div className="login-info-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <div className="login-info-form">
                                <input
                                    type="text"
                                    value={this.state.loginInfo}
                                    onChange={this.handleChange('loginInfo')}
                                    className="login-info-input"
                                />
                                <input className="login-info-submit" type="submit" value="Continue" />
                            </div>
                        </form>
                    </div >
                )
        }
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return this.handleNextForm()
    }
}

export default LoginInfoForm;