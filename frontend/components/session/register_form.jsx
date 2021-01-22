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
        this.demoUser = this.demoUser.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal());
    }

    demoUser() {
        const user = { email: 'demouser@gmail.com', password: "password" } 
        this.props.signin(user).then(this.props.closeModal);
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
                <span className="dot" onClick={this.props.closeModal}></span>
                <div onClick={this.props.closeModal} className="close-x">✖</div>
                    <h3 className="register-header">Create your account</h3>
                    <br />
                    <p className="register-quote">Registration is easy.</p>
                    <br />
                    <div>
                        <br />

                        <label className="register-label">Email
                            <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="signin-input">
                            </input>
                        </label>

                        <br />

                        <label className="register-label">First Name
                            <input type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            className="signin-input">
                            </input>
                        </label>

                        <br />

                        <label className="register-label">Password
                            <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signin-input">
                            </input>
                        </label>

                        <br />
                        {this.renderErrors()}
                        <br />
                        <button className="register">Register</button>
                        <br />
                        <button className="demo-user-button" onClick={this.demoUser}>Demo User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterForm;