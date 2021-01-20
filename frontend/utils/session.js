export const signup = (user) => {
    console.log('ajax-signup')
    return $.ajax({
        url: '/api/user',
        method: 'POST',
        data: { user }
    })
}

export const login = (user) => {
    console.log('ajax-login')
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
}

export const logout = () => {
    console.log('ajax-logout')
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
}