import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, RECEIVE_PRODUCT_ERRORS } from '../actions/product_actions';

const productReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_PRODUCT:
            debugger
            newState[action.product.id] = action.product 
            return newState;
        case RECEIVE_PRODUCTS:
            return action.products
        case RECEIVE_PRODUCT_ERRORS:
            return null;
        default: 
            return state;
    }
}

export default productReducer;