import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from '../actions/product_actions';

const productReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product 
            return newState;
        case RECEIVE_PRODUCTS:
            return action.products
        default: 
            return state;
    }
}

export default productReducer;