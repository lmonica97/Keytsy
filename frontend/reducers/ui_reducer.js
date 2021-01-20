import { combineReducers } from 'redux';

import ModalReducer from './modal_reducer';

const uiReducer = () => {
    return combineReducers({
        modal: ModalReducer
    })
}

export default uiReducer;