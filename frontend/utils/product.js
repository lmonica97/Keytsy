export const fetchProducts = () => {
    // debugger
    return $.ajax({
        url:'api/products',
        method: 'GET',
        // success: response => this.setState({ products: response })
    })
}

export const fetchProduct = (productId) => {
    // debugger
    return $.ajax({
        url: `/api/products/${productId}`,
        method: 'GET',
        // success: response => this.setState({ product: response })
    })
}

export const createProduct = (product) => {
    return $.ajax({
        url: `/api/products`,
        method: 'POST',
        data: { product },
        contentType: false,
        processData: false
    })
}