import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERVER_ERRORS } from '../actions/server_actions';
import { RECEIVE_CHANNEL_ERRORS, RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_PRIVATESERVER_ERRORS } from '../actions/privateserver_actions';
import { RECEIVE_MESSAGE_ERRORS } from '../actions/message_actions';

const _nullState = {
  userId: null
};

const sessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { userId: action.user.id };
    case LOGOUT_CURRENT_USER:
      return _nullState;
    case RECEIVE_SERVER_ERRORS:
    case RECEIVE_CHANNEL_ERRORS:
    case RECEIVE_PRIVATESERVER_ERRORS:
    case RECEIVE_MESSAGE_ERRORS:
      if (action.errors[0] === "Invalid credentials") {
        return _nullState;
      } else {
        return state;
      }
    default:  
      return state;
  }
};

export default sessionReducer;