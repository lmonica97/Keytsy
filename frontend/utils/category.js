export const fetchAllProducts = (categoryId) => {
    return $.ajax({
        url: `api/categories/${categoryId}`,
        method: 'GET'
    })
}