export const fetchCartitems = () => {
    // debugger
    return $.ajax({
        url: 'api/cartitems',
        method: 'GET',
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

export const addSingleItem = (cartitem) => {
    // debugger
    return $.ajax({
        url: `/api/cartitems`,
        method: 'POST',
        data: { cartitem }
    })
}