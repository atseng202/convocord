import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';

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