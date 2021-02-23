import { ADD_CARTITEM, RECEIVE_ALL_CARTITEMS, REMOVE_CARTITEM, RECEIVE_CARTITEM_ERRORS } from '../actions/cartitem_actions';

const cartitemReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ALL_CARTITEMS:
            return action.cartitems
        case ADD_CARTITEM:
            debugger
            return Object.assign({}, state, { [action.cartitem.id]: action.cartitem })
        case REMOVE_CARTITEM:   
            // debugger
            delete nextState[action.cartitemId]
            // debugger
            return nextState;
        case RECEIVE_CARTITEM_ERRORS:
            return null;
        default: 
            return state;
    }
}

export default cartitemReducer;