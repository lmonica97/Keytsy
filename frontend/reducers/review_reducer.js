import {RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW_ERRORS} from '../actions/review_actions';

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.review.id]: action.review })
        case RECEIVE_ALL_REVIEWS:
            return action.reviews
        case REMOVE_REVIEW: 
            delete nextState[action.reviewId]
            return nextState;
        case RECEIVE_REVIEW_ERRORS:
            return null;
        default:
            return state;
    }
}

export default reviewReducer;