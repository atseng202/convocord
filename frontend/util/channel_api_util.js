export const fetchChannel = channelId => (
  $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}`,
    dataType: 'json'
  })
);

export const createChannel = formChannel => (
  $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: formChannel,
    contentType: false,
    processData: false
  })
);