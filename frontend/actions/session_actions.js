import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receive_current_user = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

export const logout_current_user = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receive_session_errors = sessionErrors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: sessionErrors
});

// Thunk Action Creators
export const signup = formUser => dispatch => {
  return SessionAPIUtil.signup(formUser).then(
    user => dispatch(receive_current_user(user)),
    errors => dispatch(receive_session_errors(errors.responseJSON))
  );
};

export const login = formUser => dispatch => {
  return SessionAPIUtil.login(formUser).then(
    user => dispatch(receive_current_user(user)),
    errors => dispatch(receive_session_errors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(
    () => dispatch(logout_current_user()),
    errors => dispatch(receive_session_errors(errors.responseJSON))
  );
};

window.signup = signup;
window.login = login;
window.logout = logout;