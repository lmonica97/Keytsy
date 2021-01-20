import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    sessionError: sessionErrorsReducer,
    ui: uiReducer 
})

export default RootReducer;
