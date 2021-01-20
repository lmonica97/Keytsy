import React from 'react';
import { withRouter } from 'react-router-dom'
class SigninForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }

    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.modalClose);
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
        console.log('sign in form up')
        return(
            <div className="signin-form-container">
                <form onSubmit={this.handleSubmit} className="signin-form-box">
                    <h3 className="signin-header">Sign in</h3>
                    <button className="register-button">Register</button>
                    <div onClick={this.props.modalClose} className="close-x">X</div>
                    <br />
                    <label>Email address 
                        <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}>
                        </input>
                    </label>
                    <br />

                    <label>Password
                        <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}>
                        </input>
                    </label>
                    <br />
                    {this.renderErrors()}
                    <br />
                    <button className="sigin-button">Sign in</button>
                    <br />
                    <button className="demo-user-button">Demo User</button>
                </form>
            </div>
        )
    }
}

export default SigninForm;