import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';

export const OPEN_SERVER_FORM = 'OPEN_SERVER_FORM';

export const CLOSE_SERVER_FORM = 'CLOSE_SERVER_FORM';

export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';

export const CLEAR_SERVER_ERRORS = 'CLEAR_SERVER_ERRORS';

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

export const fetchServers = () => dispatch => {
  return ServerAPIUtil.fetchServers().then(
    servers => dispatch(receive_servers(servers))
  );
};

export const fetchServer = serverId => dispatch => {
  return ServerAPIUtil.fetchServer(serverId).then(
    server => {
      dispatch(receive_server(server));
      return server;
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

export const openServerForm = () => ({
  type: OPEN_SERVER_FORM
});

export const closeServerForm = () => ({
  type: CLOSE_SERVER_FORM
});