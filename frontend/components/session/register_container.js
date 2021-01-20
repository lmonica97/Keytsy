import { connect } from 'react-redux';
import React from 'react';
import RegisterForm from './register_form';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session';

const mapStateToProps = ({ sessionError }) => {
    debugger
    console.log('register errors')
    return {
        errors: sessionError,
        formType: 'register',
    }
}
const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);