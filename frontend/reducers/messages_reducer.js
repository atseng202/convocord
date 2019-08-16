import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // all initial messages data for the channel are normalized 
    // during channel fetch 
    case RECEIVE_CHANNEL:
      return action.channel.messages ?  action.channel.messages : state;
    default:
      return state;
  }
};

export default messagesReducer;