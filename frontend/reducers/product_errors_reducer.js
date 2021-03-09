import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, RECEIVE_PRODUCT_ERRORS } from '../actions/product_actions';
import { RECEIVE_ALL_CATEGORY } from '../actions/category_actions';

const productErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return [];
        case RECEIVE_PRODUCT:
            return [];
        case RECEIVE_PRODUCT_ERRORS:
            return action.errors;
        case RECEIVE_ALL_CATEGORY:
            return [];
        default: 
            return state;
    }
}

export default productErrorsReducer;