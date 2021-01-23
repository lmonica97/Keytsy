import * as SessionApiUtil from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser 
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

// const removeErrors = () => ({
//     type: REMOVE_SESSION_ERRORS
// })

export const signup = (formUser) => dispatch => {
    return SessionApiUtil.signup(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)
    ))
}

export const signin = (formUser) => dispatch => {
    // debugger
    return SessionApiUtil.signin(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)
        ))
}

export const signout = () => dispatch => {
    return SessionApiUtil.signout() 
        .then( () => dispatch(logoutCurrentUser()))
}

// export const deleteErrors = () => dispatch => {
//     dispatch(removeErrors())
// }