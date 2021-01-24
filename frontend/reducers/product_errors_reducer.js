import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, RECEIVE_PRODUCT_ERRORS } from '../actions/product_actions';

const productErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return [];
        case RECEIVE_PRODUCT:
            return [];
        case RECEIVE_PRODUCT_ERRORS:
            return action.errors;
        default: 
            return state;
    }
}

export default productErrorsReducer;