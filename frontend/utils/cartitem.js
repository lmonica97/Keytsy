export const addCartitem = (cartitem) => {
    return $.ajax({
        url: 'api/cartitems',
        method: 'GET',
        data: { cartitem }
    })
}

export const updateCartitem = (cartitem) => {
    return $.ajax({
        url: `api/cartitems/${cartitem.id}`,
        method: 'PATCH',
        data: { cartitem }
    })
}

export const removeCartitem = (cartitemId) => {
    return $.ajax({
        url: `api/cartitems/${cartitemId}`,
        method: 'DELETE'
    })
}