export const fetchChannel = channelId => (
  $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}`,
    dataType: 'json'
  })
);

