export const fetchServers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/servers',
    dataType: 'json'
  })
);