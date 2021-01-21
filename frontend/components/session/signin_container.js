import { connect } from 'react-redux';
import React from 'react';
import SigninForm from './signin_form';
import { signin } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ sessionError }) => {
    console.log('state props of sign in')
    debugger
    return {
    errors: sessionError,
    formType: 'signin'
    }
}

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signin(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('register'))} className="register-button">
            Register
        </button>
    ),
    modalClose: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);