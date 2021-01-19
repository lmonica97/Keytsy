import React from 'react';

class Signup extends React.Component {
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

    signup () {
        if (this.props.formType === 'Sign Up!') {
            return (
                <label>First Name:
                    <input
                    type="text"
                    value={this.state.name}
                    onChange={this.update('name')}>
                    </input>    
                </label>
            )
        }  
    }

    render() {
        <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
                <h3>Welcome to Keytsy!</h3>
                <br />
                Please {this.props.formType} or {this.props.navLink}
                {this.renderErrors()}
                <br />
                <div>
                    {this.signup()}
                    <br />
                    <label>Email:
                        <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}>
                        </input>
                    </label>
                    <br />
                    <label>Password:
                        <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}>
                        </input>
                    </label>
                    <br />
                    <button>{this.props.formType}</button>
                </div>
            </form>

        </div>
    }
}

export default Signup;