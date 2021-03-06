import * as CartitemApiUtil from '../utils/cartitem';

export const ADD_CARTITEM = 'ADD_CARTITEM';
export const REMOVE_CARTITEM = 'REMOVE_CARTITEM';
export const RECEIVE_CARTITEM_ERRORS = 'RECEIVE_CARTITEM_ERRORS';
export const RECEIVE_ALL_CARTITEMS = 'RECEIVE_ALL_CARTITEMS';

export const addCartitem = cartitem => {
    return {
        type: ADD_CARTITEM,
        cartitem
    }
}

export const receiveCartitems = (cartitems) => {
    return {
        type: RECEIVE_ALL_CARTITEMS,
        cartitems 
    }
}

export const removeCartitem = cartitemId => {
    return {
        type: REMOVE_CARTITEM,
        cartitemId
    }
}

export const receiveCartitemErrors = errors => {
    return {
        type: RECEIVE_CARTITEM_ERRORS,
        errors
    }
}

export const fetchAllitems = () => dispatch => {
    return CartitemApiUtil.fetchCartitems() 
        .then(cartitems => dispatch(receiveCartitems(cartitems)),
        error => dispatch(receiveCartitems(error.responseJSON)))
}

export const addItem = cartitem => dispatch => {
    return CartitemApiUtil.addSingleItem(cartitem)
        .then(cartitem => dispatch(addCartitem(cartitem)),
        error => dispatch(receiveCartitemErrors(error.responseJSON)))
}

export const updateItem = cartitem => dispatch => {
    return CartitemApiUtil.updateCartitem(cartitem)
        .then(cartitem => dispatch(addCartitem(cartitem)),
        error => dispatch(receiveCartitemErrors(error)))
}

export const removeItem = cartitemId => dispatch => {
    return CartitemApiUtil.removeCartitem(cartitemId)
        .then(() => dispatch(removeCartitem(cartitemId)),
        error=> dispatch(receiveCartitemErrors(error.responseJSON)))
}