import { RECEIVE_SERVER } from '../actions/server_actions';
import { RECEIVE_CHANNEL, RECEIVE_NEW_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // channels data is normalized during server show fetch
    case RECEIVE_SERVER:
      return action.server.channels ? action.server.channels : state;
    case RECEIVE_CHANNEL:
      return {
        ...state,
        [action.channel.channel.id]: action.channel.channel
      };
    case RECEIVE_NEW_CHANNEL:
      return {
        ...state,
        [action.channel.channel.id]: action.channel.channel
      }
    default:
      return state;
  }
};

export default channelsReducer;