import { connect } from 'react-redux';
import React from 'react';
import RegisterForm from './register_form';
import { Link } from 'react-router-dom';
import { signup, receiveErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    debugger
    // // console.log('register errors')
    return {
        errors: errors.session,
        formType: 'register',
    }
}
const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()), 
    deleteErrors: (errors) => dispatch(receiveErrors(errors)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);