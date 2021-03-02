export const fetchReviews = (productId) => {
    debugger
    return $.ajax({
        url: `/api/products/${productId}/reviews`,
        method: 'GET'
    })
}

export const updateReview = (review) => {
    debugger
    return $.ajax({
        url: `/api/reviews/${review.id}`,
        method: 'PATCH',
        data: { review }
    })
}

export const createReview = (review) => {
    return $.ajax({
        url: `/api/reviews`,
        method: 'POST',
        data: { review }
    })
}

export const deleteReview = (productId, review) => {
    debugger
    return $.ajax({
        url: `/api/products/${productId}/reviews/${review.id}`,
        method: 'DELETE'
    })
}