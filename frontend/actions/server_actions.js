import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';

export const OPEN_SERVER_FORM = 'OPEN_SERVER_FORM';

export const CLOSE_SERVER_FORM = 'CLOSE_SERVER_FORM';

export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';

export const CLEAR_SERVER_ERRORS = 'CLEAR_SERVER_ERRORS';

export const SELECT_SERVER_CHANNEL = 'SELECT_SERVER_CHANNEL';

export const RECEIVE_SERVER_INVITES = 'RECEIVE_SERVER_INVITES';

export const receive_servers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

export const receive_server = server => ({
  type: RECEIVE_SERVER,
  server
});

export const receive_server_errors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

export const clear_server_errors = () => ({
  type: CLEAR_SERVER_ERRORS
});

export const receive_server_invites = (sampleServers) => ({
  type: RECEIVE_SERVER_INVITES,
  sampleServers
});

// Action Creators
export const fetchServers = () => dispatch => {
  return ServerAPIUtil.fetchServers().then(
    servers => dispatch(receive_servers(servers)),
    errors => dispatch(receive_server_errors(errors.responseJSON))
  );
};

export const fetchSampleServers = () => dispatch => {
  return ServerAPIUtil.fetchSampleServers().then(
    sampleServers => dispatch(receive_server_invites(sampleServers)),
    errors => dispatch(receive_server_errors(errors.responseJSON))
  );
};

export const fetchServer = serverId => dispatch => {
  return ServerAPIUtil.fetchServer(serverId).then(
    server => {
      dispatch(receive_server(server));
      return server;
    },
    errors => { 
      dispatch(receive_server_errors(errors.responseJSON));
    }
  );
};

export const createSingleServer = formServer => dispatch => {
  return ServerAPIUtil.createServer(formServer).then(
    server =>  {
      dispatch(receive_server(server));
      return server;
    },
    errors => dispatch(receive_server_errors(errors.responseJSON))
  );
};

export const joinSingleServer = formServer => dispatch => {
  return ServerAPIUtil.joinServer(formServer).then(
    server => { 
      dispatch(receive_server(server));
      return server;
    },
    errors => dispatch(receive_server_errors(errors.responseJSON))
  );
};

// Server UI Actions
export const openServerForm = () => ({
  type: OPEN_SERVER_FORM
});

export const closeServerForm = () => ({
  type: CLOSE_SERVER_FORM
});

export const selectServerChannel = channelId => ({
  type: SELECT_SERVER_CHANNEL,
  channelId
});
