export const createMessage = formMessage => (
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: formMessage,
    contentType: false,
    processData: false
  })
);