import { RECEIVE_SERVER } from '../actions/server_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER:
      return action.server.channels ? action.server.channels : state;
    default:
      return state;
  }
};

export default channelsReducer;