import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';

const reviewErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_REVIEW:
            return [];
        case REMOVE_REVIEW: 
            return [];
        case RECEIVE_ALL_REVIEWS:
            debugger
            return [];
        case RECEIVE_REVIEW_ERRORS: 
        debugger
            return action.errors;
        default: 
            return state;
    }
}

export default reviewErrorsReducer;