import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';
import { RECEIVE_PRIVATESERVER } from '../actions/privateserver_actions';

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
    case RECEIVE_PRIVATESERVER:
      return action.privateserver.users;
    default:
      return state;
  }
};

export default usersReducer;