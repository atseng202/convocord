import { combineReducers } from 'redux';
import serversReducer from './servers_reducer';
import usersReducer from './users_reducer';
import categoriesReducer from './categories_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  categories: categoriesReducer,
  channels: channelsReducer,
  messages: messagesReducer
});

export default entitiesReducer;