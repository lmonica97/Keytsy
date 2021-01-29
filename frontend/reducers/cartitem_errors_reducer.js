import { RECEIVE_ALL_CARTITEMS, ADD_CARTITEM, REMOVE_CARTITEM, RECEIVE_CARTITEM_ERRORS } from '../actions/cartitem_actions';

const cartitemErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_CARTITEMS:
            return [];
        case ADD_CARTITEM:
            return [];
        case REMOVE_CARTITEM:
            return [];
        case RECEIVE_CARTITEM_ERRORS:
            return action.errors
        default: 
            return state;
    }
}

export default cartitemErrorsReducer;