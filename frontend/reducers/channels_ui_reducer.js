import { SELECT_SERVER_CHANNEL } from '../actions/server_actions';

const initialState = {
  selectedChannelId: null
};

const channelsUIReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SELECT_SERVER_CHANNEL:
      return {
        selectedChannelId: action.channelId
      };
    default:
      return state; 
  }
};

export default channelsUIReducer;