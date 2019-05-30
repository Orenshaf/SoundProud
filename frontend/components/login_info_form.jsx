import React from 'react';

class LoginInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginInfo: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNextForm = this.handleNextForm.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.handleNextForm);
    }

    handleNextForm() {
        this.props.closeModal()
        this.props.nextForm === 'signup' ? this.props.openModal('signup') : this.props.openModal('login');
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
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                        />
                        <input className="session-submit" type="submit" value="Continue"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginInfoForm;