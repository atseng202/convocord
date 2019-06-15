export const signup = formUser => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    processData: false,
    contentType: false,
    data: formUser
  })
);

export const login = formUser => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    processData: false,
    contentType: false,
    data: formUser
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);