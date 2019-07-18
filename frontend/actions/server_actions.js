import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';

export const OPEN_SERVER_FORM = 'OPEN_SERVER_FORM';

export const CLOSE_SERVER_FORM = 'CLOSE_SERVER_FORM';

export const receive_servers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

export const receive_server = server => ({
  type: RECEIVE_SERVER,
  server
});

export const fetchServers = () => dispatch => {
  return ServerAPIUtil.fetchServers().then(
    servers => dispatch(receive_servers(servers))
  );
};

export const openServerForm = () => ({
  type: OPEN_SERVER_FORM
});

export const closeServerForm = () => ({
  type: CLOSE_SERVER_FORM
});