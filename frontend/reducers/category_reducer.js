import { RECEIVE_ALL_CATEGORY } from '../actions/category_actions';

const categoryReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_CATEGORY: 
        debugger
            return action.products 
        default: 
            return state; 
    }
}

export default categoryReducer;