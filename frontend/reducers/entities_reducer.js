import { combineReducers } from 'redux';
import serversReducer from './servers_reducer';
import usersReducer from './users_reducer';
import categoriesReducer from './categories_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  categories: categoriesReducer
});

export default entitiesReducer;