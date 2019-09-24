import {  OPEN_USER_POPOUT, CLOSE_USER_POPOUT } from '../actions/member_ui_actions';

const initialState = {
  showPopoutId: null
};

const membersSidebarUIReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_USER_POPOUT:
      return { showPopoutId: action.userId };
    case CLOSE_USER_POPOUT:
      return initialState;
    default:
      return state;
  }
};

export default membersSidebarUIReducer;

