export const fetchAllProducts = (categoryId) => {
    debugger
    return $.ajax({
        url: `api/categories/${categoryId}`,
        method: 'GET'
    })
}