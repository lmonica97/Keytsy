import { connect } from 'react-redux';
import React from 'react';
import SigninForm from './signin_form';
import { signin } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    console.log('state props of sign in')
    // debugger
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
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);