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