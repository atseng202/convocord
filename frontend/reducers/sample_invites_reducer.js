import { RECEIVE_SERVER_INVITES } from '../actions/server_actions';

const sampleInvitesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER_INVITES:
      return action.sampleServers;
    default:
      return state;
  }
};

export default sampleInvitesReducer;