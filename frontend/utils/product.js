export const fetchProducts = () => {
    return $.ajax({
        url:'api/products',
        method: 'GET'
    })
}

export const fetchProduct = (productId) => {
    debugger
    return $.ajax({
        url: `/api/products/${productId}`,
        method: 'GET'
    })
}