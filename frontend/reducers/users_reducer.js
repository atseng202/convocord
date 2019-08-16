import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        [action.user.id]: action.user
      };
    case RECEIVE_SERVER:
      return action.server.users;
    default:
      return state;
  }
};

export default usersReducer;