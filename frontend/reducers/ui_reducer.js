import { combineReducers } from 'redux';
import serversUIReducer from './servers_ui_reducer';
import channelsUIReducer from './channels_ui_reducer';
import membersSidebarUIReducer from './members_sidebar_ui_reducer';

const uiReducer = combineReducers({
  serversUI: serversUIReducer,
  channels: channelsUIReducer,
  membersSidebar: membersSidebarUIReducer
});

export default uiReducer;