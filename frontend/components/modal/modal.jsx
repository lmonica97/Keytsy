import React from 'react';
import SigninFormContainer from '../session/signin_container';
import RegisterFormContainer from '../session/register_container';
import  { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ReviewFormContainer from '../review/create_review_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'signin':
      component = <SigninFormContainer />;
      break;
    case 'register':
      component = <RegisterFormContainer />;
      break;
    case 'review':
      component = <ReviewFormContainer />;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
