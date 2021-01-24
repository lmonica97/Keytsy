import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import productReducer from './product_reducer';

const RootReducer = combineReducers({
    session,
    ui,
    errors,
    product: productReducer,
})

export default RootReducer;
