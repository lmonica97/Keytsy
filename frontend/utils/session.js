<<<<<<< HEAD
export const signup = (user) => {
    // console.log('ajax-signup')
    return $.ajax({
=======
export const signup = (user) => (
    $.ajax({
>>>>>>> auth-mvp
        url: '/api/user',
        method: 'POST',
        data: { user }
    })
)

<<<<<<< HEAD
export const login = (user) => {
    // console.log('ajax-login')
    return $.ajax({
=======
export const signin = (user) => (
    $.ajax({
>>>>>>> auth-mvp
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
)

<<<<<<< HEAD
export const logout = () => {
    // console.log('ajax-logout')
    return $.ajax({
=======
export const signout = () => (
    $.ajax({
>>>>>>> auth-mvp
        url: '/api/session',
        method: 'DELETE'
    })
)