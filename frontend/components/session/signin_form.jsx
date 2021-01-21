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
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    showModal () {
        this.setState({ show: true})
    }

    hideModal() {
        this.setState({ show: false})
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        console.log('user', user);
        this.props.processForm(user).then(res => console.log('res', res))
        // .then(this.props.modalClose);
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
                <span className="dot"></span>
                <div onClick={this.props.modalClose} className="close-x">✖</div>
                <form onSubmit={this.handleSubmit} className="signin-form-box">   
                    {this.props.otherForm}
                    <h3 className="signin-header">Sign in</h3>
                    <br />
                    <label className="signin-label">Email address </label>
                        <br />
                        <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}>
                        </input>
                    <br />

                    <label className="signin-label">Password </label>
                        <br />
                        <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}>
                        </input>
                    <br />
                    {this.renderErrors()}
                    <br />
                    <button className="signin-button">Sign in</button>
                    <br />
                    <button className="demo-user-button">Demo User</button>
                </form>
            </div>
        )
    }
}

export default SigninForm;