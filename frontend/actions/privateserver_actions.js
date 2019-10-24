import * as PrivateserverAPIUtil from '../util/privateserver_api_util';

export const RECEIVE_PRIVATESERVERS = 'RECEIVE_PRIVATESERVERS';
export const RECEIVE_PRIVATESERVER = 'RECEIVE_PRIVATESERVER';

export const REMOVE_PRIVATESERVER = 'REMOVE_PRIVATESERVER';

export const RECEIVE_PRIVATESERVER_ERRORS = 'RECEIVE_PRIVATESERVER_ERRORS';

export const receive_privateservers = privateservers => ({
  type: RECEIVE_PRIVATESERVERS,
  privateservers
});

export const receive_privateserver = privateserver => ({
  type: RECEIVE_PRIVATESERVER,
  privateserver
});

export const remove_privateserver = privateserver => ({
  type: REMOVE_PRIVATESERVER,
  privateserver
});

export const receive_privateserver_errors = errors => ({
  type: RECEIVE_PRIVATESERVER_ERRORS,
  errors
});

export const fetchPrivateserver = privateserverId => dispatch => {
  return PrivateserverAPIUtil.fetchPrivateserver(privateserverId).then(
    privateserver => {
      dispatch(receive_privateserver(privateserver));
      return privateserver;
    },
    errors => dispatch(receive_privateserver_errors(errors.responseJSON))
  );
};

export const fetchPrivateservers = () => dispatch => {
  return PrivateserverAPIUtil.fetchPrivateservers().then(
    privateservers => dispatch(receive_privateservers(privateservers)),
    errors => dispatch(receive_privateserver_errors(errors.responseJSON))
  );
};

export const createSinglePrivateserver = formPrivateserver => dispatch => {
  return PrivateserverAPIUtil.createPrivateserver(formPrivateserver).then(
    privateserver => {
      dispatch(receive_privateserver(privateserver));
      return privateserver;
    },
    errors => dispatch(receive_privateserver_errors(errors.responseJSON))
  );
};

export const toggleInactivePrivateserver = privateserverId => dispatch => {
  return PrivateserverAPIUtil.toggleInactivePrivateserver(privateserverId).then(
    privateserver => {
      dispatch(remove_privateserver(privateserver));
      return privateserver;
    },
    errors => dispatch(receive_privateserver_errors(errors.responseJSON))
  );
};