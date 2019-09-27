import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE, REMOVE_MESSAGES } from '../actions/message_actions';
import { RECEIVE_PRIVATESERVER } from '../actions/privateserver_actions';

const _initialState = {};

const messagesReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    // all initial messages data for the channel are normalized 
    // during channel fetch 
    case RECEIVE_CHANNEL:
      return action.channel.messages ?  action.channel.messages : _initialState;
    case RECEIVE_MESSAGE:
      return {
        ...state, 
        [action.message.id]: action.message
      };
    case RECEIVE_PRIVATESERVER:
      return action.privateserver.messages ? action.privateserver.messages : _initialState;
    case REMOVE_MESSAGES:
      return _initialState;
    default:
      return state;
  }
};

export default messagesReducer;