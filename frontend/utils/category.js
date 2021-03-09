export const fetchAllProducts = (categoryId) => {
    debugger
    return $.ajax({
        url: `api/categories/${categoryId}`,
        method: 'GET'
    })
}

export const fetchAllCategories = () => {
    return $.ajax({
        url: 'api/categories',
        method: 'GET'
    })
}