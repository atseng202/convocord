import { combineReducers } from 'redux';
import serversUIReducer from './servers_ui_reducer';

const uiReducer = combineReducers({
  serversUI: serversUIReducer
});

export default uiReducer;