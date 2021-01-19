import { RECEIVE_CURRENT_USERS, RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            action.errors;
        default:
            return state;
    }
}

export default sessionErrorsReducer;