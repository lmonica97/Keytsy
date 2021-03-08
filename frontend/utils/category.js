export const fetchAllProducts = (categoryId) => {
    return $.ajax({
        debugger
        url: `api/categories/${categoryId}`,
        method: 'GET'
    })
}