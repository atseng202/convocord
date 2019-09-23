import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receive_message = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const createSingleMessage = formMessage => dispatch => {
  return MessageAPIUtil.createMessage(formMessage).then(
    message => message
  );
};