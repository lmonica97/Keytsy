import * as ReviewApiUtil from '../utils/review';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const receiveReview = (review) => {
    debugger
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const receiveReviews = (reviews) => {
    debugger
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
}

export const removeReview = (reviewId) => {
    debugger
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const receiveReviewErrors = (errors) => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
}

export const fetchReviews = productId => dispatch => {
    debugger
    return ReviewApiUtil.fetchReviews(productId)
        .then(reviews => dispatch(receiveReviews(reviews)),
        error => dispatch(receiveReviewErrors(error.responseJSON)))
}

export const createReview = (review) => {
    return ReviewApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review))),
        error => dispatch(receiveReviewErrors(error.responseJSON))
}

export const updateReview = (review) => {
    debugger
    return ReviewApiUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)),
        error => dispatch(receiveReviewErrors(error.responseJSON)))
}

export const deleteReview = (productId, review) => {
    debugger
    return ReviewApiUtil.deleteReview(productId, review)
        .then(() => dispatch(removeReview(reviewId)),
        error => dispatch(receiveReviewErrors(error.responseJSON)))
}