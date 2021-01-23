import React from 'react';
import { withRouter } from 'react-router-dom'

class SigninForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            show: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.closeModal);
    }

    renderErrors() {
        if ((this.props.errors).length !== 0) {
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

    demoUser() {
    //    debugger
       const user = { email: "demouser@gmail.com", password: "password" }
       this.props.processForm(user).then(this.props.closeModal)
    //    debugger
    }

    render() {
        // console.log('sign in form up')
        // debugger
        return(
            <div className="signin-form-container">
                <span className="dot" onClick={this.props.closeModal}></span>
                <div onClick={this.props.closeModal} className="close-x">✖</div>
                <form onSubmit={this.handleSubmit} className="signin-form-box"> 
                    {this.props.otherForm}
                    <h3 className="signin-header">Sign in</h3>
                    <br />
                    <label className="signin-label">Email address </label>
                        <br />
                        <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="signin-input">
                        </input>
                    <br />

                    <label className="signin-label">Password </label>
                        <br />
                        <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="signin-input">
                        </input>
                    <br />
                    {this.renderErrors()}
                    <button className="signin-button">Sign in</button>
                    <br />
                </form>
                <button className="demo-user-button" onClick={this.demoUser}>Demo User</button>
            </div>
        )
    }
}

export default SigninForm;