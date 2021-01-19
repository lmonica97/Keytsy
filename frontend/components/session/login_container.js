import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './signup';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Log In',
    navLink: <Link to="/signup">Sign Up!</Link>
})
const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);