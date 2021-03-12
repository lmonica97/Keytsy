import { RECEIVE_ALL_CATEGORY } from '../actions/category_actions';

const categoryProductReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_CATEGORY: 
            return action.products 
        default: 
            return state;
    }
}

export default categoryProductReducer;