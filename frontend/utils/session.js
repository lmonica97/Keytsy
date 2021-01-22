export const signup = (user) => {
    // console.log('ajax-signup')
    return $.ajax({
        url: '/api/user',
        method: 'POST',
        data: { user }
    })
}

export const signin = (user) => {
    // console.log('ajax-login')
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
}

export const signout = () => {
    // console.log('ajax-logout')
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
}