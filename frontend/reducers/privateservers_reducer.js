import { RECEIVE_PRIVATESERVER, RECEIVE_PRIVATESERVERS } from '../actions/privateserver_actions';

const privateserversReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRIVATESERVER:
      return {
        ...state,
        [action.privateserver.privateserver.id]: action.privateserver.privateserver
      };
    case RECEIVE_PRIVATESERVERS:
      return action.privateservers;
    default:
      return state;
  }
};

export default privateserversReducer;