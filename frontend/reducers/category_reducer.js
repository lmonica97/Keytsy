import { RECEIVE_ALL_CATEGORY, RECEIVE_ALL_CATEGORIES } from '../actions/category_actions';

const categoryReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_CATEGORIES: 
            return action.categories
        default: 
            return state; 
    }
}

export default categoryReducer;