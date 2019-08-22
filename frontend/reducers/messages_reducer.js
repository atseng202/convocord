import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

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
    default:
      return state;
  }
};

export default messagesReducer;