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

    // renderErrors() {
    //     if (this.props.errors.length !== 0) {
    //         return(
    //             <ul>
    //                 {this.props.errors.map((column, value) => (
    //                     <li className="errors" key={`error-${i}`}>
    //                         {value}
    //                     </li>
    //                 ))}
    //             </ul>
    //         )
    //     }
    // }

    componentWillUnmount() {
        const errors = [];
        this.props.deleteErrors(errors);
     }

    render() {
        // debugger
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
                        { 
                            this.props.errors.email ? 
                            <div>
                                <label className="register-label">Email</label>
                                <input
                                type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="error-label">
                                </input>
                                <label className="errors">{this.props.errors.email}</label>
                            </div>
                        :
                            <div> 
                                <label className="register-label">Email</label>
                                    <input
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="signin-input">
                                    </input>
                            </div>
                        }
                        
                        <br />
                        { 
                            this.props.errors.name ? 
                            <div>
                                <label className="register-label">First name</label>
                                <input
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                                className="error-label">
                                </input>
                                <label className="errors">{this.props.errors.name}</label>
                            </div>
                        :
                            <div> 
                                <label className="register-label">First name</label>
                                    <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                    className="signin-input">
                                    </input>
                            </div>
                        }

                        <br />

                        { 
                            this.props.errors.password ? 
                            <div>
                                <label className="register-label">Password</label>
                                <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="error-label">
                                </input>
                                <label className="errors">{this.props.errors.password}</label>
                            </div>
                        :
                            <div> 
                                <label className="register-label">Password</label>
                                    <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="signin-input">
                                    </input>
                            </div>
                        }
                        
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