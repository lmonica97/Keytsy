import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './signup';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up!',
    navLink: <Link to="/login">Log in!</Link>
})
const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);