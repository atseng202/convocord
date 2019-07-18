import { OPEN_SERVER_FORM, CLOSE_SERVER_FORM } from '../actions/server_actions';

const initialState = {
  serverFormOpen: false
};

const serversUIReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_SERVER_FORM:
      return {
        ...state,
        serverFormOpen: true
      };
    case CLOSE_SERVER_FORM:
      return {
        ...state,
        serverFormOpen: false
      }
    default:
      return state;
  }
};

export default serversUIReducer;