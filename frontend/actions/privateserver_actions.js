import * as PrivateserverAPIUtil from '../util/privateserver_api_util';

export const RECEIVE_PRIVATESERVERS = 'RECEIVE_PRIVATESERVERS';
export const RECEIVE_PRIVATESERVER = 'RECEIVE_PRIVATESERVER';

export const receive_privateservers = privateservers => ({
  type: RECEIVE_PRIVATESERVERS,
  privateservers
});

export const receive_privateserver = privateserver => ({
  type: RECEIVE_PRIVATESERVER,
  privateserver
});

export const fetchPrivateserver = privateserverId => dispatch => {
  return PrivateserverAPIUtil.fetchPrivateserver(privateserverId).then(
    privateserver => {
      dispatch(receive_privateserver(privateserver));
      return privateserver;
    }
  );
};

export const fetchPrivateservers = () => dispatch => {
  return PrivateserverAPIUtil.fetchPrivateservers().then(
    privateservers => dispatch(receive_privateservers(privateservers))
  );
};

export const createSinglePrivateserver = formPrivateserver => dispatch => {
  return PrivateserverAPIUtil.createPrivateserver(formPrivateserver).then(
    privateserver => {
      dispatch(receive_privateserver(privateserver));
      return privateserver;
    }
  );
};