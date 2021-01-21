export const signup = (user) => (
    $.ajax({
        url: '/api/user',
        method: 'POST',
        data: { user }
    })
)

export const signin = (user) => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
)

export const signout = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
)