export const fetchReviews = (productId) => {
    debugger
    return $.ajax({
        url: `api/products/${productId}/reviews`,
        method: 'GET'
    })
}

export const updateReview = (productId, review) => {
    debugger
    return $.ajax({
        url: `api/products/${productId}/reviews/${review.id}`,
        method: 'PATCH',
        data: { review }
    })
}

export const createReview = (productId, review) => {
    debugger
    return $.ajax({
        url: `api/products/${productId}/reviews`,
        method: 'POST',
        data: { review }
    })
}

export const deleteReview = (productId, review) => {
    debugger
    return $.ajax({
        url: `api/products/${productId}/reviews/${review.id}`,
        method: 'DELETE'
    })
}