import { faPray } from '@fortawesome/free-solid-svg-icons';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_SINGLE_USER: 
            return Object.assign({}, state, { [action.user.id]: action.user })
        default:
            return state;
    }
}

export default usersReducer;