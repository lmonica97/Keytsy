import React from 'react';
import SigninFormContainer from '../session/signin_container';
import RegisterFormContainer from '../session/register_container';
import  { connect } from 'react-redux';
import { modalClose } from '../../actions/modal_actions';

function Modal({ modal, modalClose }) {
    // if (!modal) {
    //     return null;
    // }
    debugger
    console.log('in the modal')
    let component;
    switch(modal) {
        case 'signin':
            console.log('about to go to sign in container')
            component = <SigninFormContainer />
            break;
        case 'register':
            component = <RegisterFormContainer />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={modalClose}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('opening Modal')
    debugger
    return {
        modal: state.ui.modal 
    }
    debugger
}

const mapDispatchToProps = dispatch => {
    console.log('closing Modal')
    return {
        modalClose: () => dispatch(modalClose())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);