export const fetchReviews = (productId) => {
    return $.ajax({
        url: `api/products/${productId}/reviews`,
        method: 'GET'
    })
}