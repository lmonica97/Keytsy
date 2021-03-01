export const fetchReviews = (productId) => {
    return $.ajax({
        url: `api/products/${productId}/reviews`,
        method: 'GET'
    })
}

export const updateReview = (productId, review) => {
    return $.ajax({
        url: `api/products/${productId}/reviews/${review.id}`,
        method: 'PATCH',
        data: { review }
    })
}

export const createReview = (productId, review) => {
    return $.ajax({
        url: `api/products/${productId}/reviews`,
        method: 'POST',
        data: { review }
    })
}

export const deleteReview = (productId, review) => {
    return $.ajax({
        url: `api/products/${productId}/reviews/${review.id}`,
        method: 'DELETE'
    })
}