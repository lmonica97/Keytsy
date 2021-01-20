import React from 'react';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        console.log('register form up')
        return (
            <div className="register-form-container">
                <form onSubmit={this.handleSubmit} className="register-form-box">

                    <h3 className="register-header">Create your account</h3>
                    <br />
                    <p>Registration is easy.</p>
                    <br />
                    <div>
                        <br />

                        <label className="register-label">Email
                            <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}>
                            </input>
                        </label>

                        <br />

                        <label className="register-label">First Name
                            <input type="text"
                            value={this.state.name}
                            onChange={this.update('name')}>
                            </input>
                        </label>

                        <br />

                        <label className="register-label">Password
                            <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}>
                            </input>
                        </label>

                        <br />
                        {this.renderErrors()}
                        <br />
                        <button className="register-button">Register</button>
                        <br />
                        <button className="demo-user-button">Demo User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterForm;