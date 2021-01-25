import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import productReducer from './product_reducer';
import entitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session,
    ui,
    errors,
})

export default RootReducer;
