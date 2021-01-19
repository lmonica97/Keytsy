import * as SessionApiUtil from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user 
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = (formUser) => dispatch => {
    return SessionApiUtil.signup(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)
    ))
}

export const login = (formUser) => dispatch => {
    return SessionApiUtil.login(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)
        ))
}

export const logout = () => dispatch => {
    return SessionApiUtil.logout() 
        .then( () => dispatch(logoutCurrentUser()))
}