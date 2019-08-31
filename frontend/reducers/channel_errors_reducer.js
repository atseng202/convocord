import { RECEIVE_CHANNEL_ERRORS, CLEAR_CHANNEL_ERRORS } from '../actions/channel_actions';

const _initialState = [];

const channelErrorsReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    case CLEAR_CHANNEL_ERRORS:
      return _initialState;
    default: 
      return state;
  }
};  

export default channelErrorsReducer;