import merge from 'lodash/merge';

import {
  LOGOUT_CURRENT_USER,
    RECEIVE_CURRENT_USER,
  } from '../actions/session_actions';
  
  const _nullUser = { currentUser: null };
  
  const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        const currentUser = action.currentUser;
        // debugger
        return merge({}, { currentUser });
      case LOGOUT_CURRENT_USER:
        return _nullUser;
      default:
        return state;
    }
  };
  
export default sessionReducer;
  