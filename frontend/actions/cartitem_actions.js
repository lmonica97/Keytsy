import * as CartitemApiUtil from '../utils/cartitem';

export const RECEIVE_CARTITEM = 'RECEIVE_CARTITEM';
export const REMOVE_CARTITEM = 'REMOVE_CARTITEM';
export const RECEIVE_CARTITEM_ERRORS = 'RECEIVE_CARTITEM_ERRORS';

export const receiveCartitem = (cartitem) => {
    return {
        type: RECEIVE_CARTITEM,
        cartitem 
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

export const addItem = cartitem => dispatch => {
    return CartitemApiUtil.addCartitem(cartitem)
        .then(cartitem => dispatch(receiveCartitem(cartitem)),
        error => dispatch(receiveCartitemErrors(error.responseJSON)))
}

export const updateItem = cartitem => dispatch => {
    return CartitemApiUtil.updateCartitem(cartitem)
        .then(cartitem => dispatch(receiveCartitem(cartitem)),
        error => dispatch(receiveCartitemErrors(error)))
}

export const removeItem = cartitemId => dispatch => {
    return CartitemApiUtil.removeCartitem(cartitemId)
        .then(() => dispatch(removeCartitem(cartitemId)),
        error=> dispatch(receiveCartitemErrors(error.responseJSON)))
}