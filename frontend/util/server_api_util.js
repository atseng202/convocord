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

export const joinServer = formServer => (
  $.ajax({
    method: 'PUT',
    url: `/api/servers/join`,
    data: formServer, 
    contentType: false, 
    processData: false 
  })
);

export const fetchSampleServers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/servers/sample',
    dataType: 'json'
  })  
);