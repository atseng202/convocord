export const fetchPrivateservers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/privateservers',
    dataType: 'json'
  })
);

export const fetchPrivateserver = privateserverId => (
  $.ajax({
    method: 'GET',
    url: `/api/privateservers/${privateserverId}`,
    dataType: 'json'
  })
);

export const createPrivateserver = formPrivateserver => (
  $.ajax({
    method: 'POST',
    url: '/api/privateservers',
    data: formPrivateserver,
    contentType: false,
    processData: false
  })
);

export const toggleInactivePrivateserver = privateserverId => (
  $.ajax({
    method: 'PATCH',
    url: `/api/privateservers/${privateserverId}`,
    dataType: 'json'
  })
);

