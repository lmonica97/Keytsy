import { connect } from 'react-redux';
import React from 'react';
import SigninForm from './signin_form';
import { signin, receiveErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
    errors: errors.session,
    formType: 'signin',
    }
}

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signin(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('register'))} className="register-button">
            Register
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    deleteErrors: (errors) => dispatch(receiveErrors(errors)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);