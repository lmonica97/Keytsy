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
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        if (this.props.errors.length !== 0) {
            return(
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li className="errors" key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        }
    }

    componentWillUnmount() {
        const errors = [];
        this.props.deleteErrors(errors);
     }

    render() {
        // console.log('register form up')
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

                        <label className="register-label">Email</label>
                            <input
                            type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="signin-input">
                            </input>
                        {this.props.errors.length >= 2 ? <p className="errors">{this.props.errors[1]}</p> : null}
                        <br />

                        <label className="register-label">First Name</label>
                            <input type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            className="signin-input">
                            </input>
                        {this.props.errors.length >= 1 ? <p className="errors">{this.props.errors[0]}</p> : null}
                        <br />
                        <label className="register-label">Password </label>
                            <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signin-input">
                            </input>
                        {this.props.errors.length >= 3 ? <p className="errors">{this.props.errors[2]}</p> : null}
                        <br />
                        <button className="register" type="submit">Register</button>
                        <br />
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterForm;