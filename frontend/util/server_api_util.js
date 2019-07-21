export const fetchServers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/servers',
    dataType: 'json'
  })
);

export const fetchServer = serverId => (
  $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}`,
    dataType: 'json'
  })
);

export const createServer = formServer => (
  $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: formServer,
    contentType: false,
    processData: false
  })
);