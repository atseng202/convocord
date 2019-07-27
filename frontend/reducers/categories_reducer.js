import { RECEIVE_SERVER } from '../actions/server_actions';

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER:
      return action.server.categories;
    default:
      return state;
  }
};

export default categoriesReducer;