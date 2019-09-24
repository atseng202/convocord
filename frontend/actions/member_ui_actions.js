export const OPEN_USER_POPOUT = 'OPEN_USER_POPOUT';
export const CLOSE_USER_POPOUT = 'CLOSE_USER_POPOUT';

export const openUserPopout = (user) => ({
  type: OPEN_USER_POPOUT,
  userId: user.id
});

export const closeUserPopout = () => ({
  type: CLOSE_USER_POPOUT
});