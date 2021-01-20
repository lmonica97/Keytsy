import { connect } from 'react-redux';
import React from 'react';
import SigninForm from './signin_form';
import { signin } from '../../actions/session';
import { modalOpen, modalClose } from '../../actions/modal_actions';

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
        <button onClick={() => dispatch(modalOpen('register'))}>
            Register
        </button>
    ),
    modalClose: () => dispatch(modalClose())
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);