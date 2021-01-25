import * as UserApiUtils from '../utils/user';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveUser = user => ({
    type: RECEIVE_SINGLE_USER,
    user
})

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users 
})

export const fetchUser = (userId) => dispatch => {
    return UserApiUtils.fetchUser(userId)
        .then(user => dispatch(receiveUser(user))
    )
}

export const fetchUsers = () => dispatch => {
    return UserApiUtils.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users))

    ) 
}