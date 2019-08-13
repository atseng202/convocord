import { combineReducers } from 'redux';
import serversUIReducer from './servers_ui_reducer';
import channelsUIReducer from './channels_ui_reducer';

const uiReducer = combineReducers({
  serversUI: serversUIReducer,
  channels: channelsUIReducer
});

export default uiReducer;