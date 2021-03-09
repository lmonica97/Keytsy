import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, RECEIVE_PRODUCT_ERRORS } from '../actions/product_actions';
import { RECEIVE_ALL_CATEGORY } from '../actions/category_actions';

const productReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, {[action.product.id]: action.product})
        case RECEIVE_PRODUCTS:
            return action.products
        case RECEIVE_PRODUCT_ERRORS:
            return null;
        case RECEIVE_ALL_CATEGORY: 
            debugger
            return action.products
        default: 
            return state;
    }
}

export default productReducer;