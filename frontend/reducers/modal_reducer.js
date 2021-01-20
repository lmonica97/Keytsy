import { MODAL_OPEN, MODAL_CLOSE } from '../actions/modal_actions';

const ModalReducer = (state = null, action) => {
    console.log('in modalreducer')
    switch(action.type) {
        case MODAL_CLOSE:
            return null;
        case MODAL_OPEN:
            return action.modal;
        default:
            return state;
    }
}

export default ModalReducer;