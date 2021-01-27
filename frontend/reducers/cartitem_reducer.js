import { RECEIVE_CARTITEM, REMOVE_CARTITEM, RECEIVE_CARTITEM_ERRORS } from '../actions/cartitem_actions';

const cartitemReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_CARTITEM:
            return Object.assign({}, state, { [action.cartitem.id]: action.cartitem })
        case REMOVE_CARTITEM:   
            delete nextState[action.cartitemId]
            return nextState;
        case RECEIVE_CARTITEM_ERRORS:
            return null;
        default: 
            return state;
    }
}

export default cartitemReducer;