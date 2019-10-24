import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const REMOVE_MESSAGES = 'REMOVE_MESSAGES';

export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';

export const receive_message = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receive_message_errors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});

export const createSingleMessage = formMessage => dispatch => {
  return MessageAPIUtil.createMessage(formMessage).then(
    message => message,
    errors => dispatch(receive_message_errors(errors.responseJSON))
  );
};

export const remove_messages = () => ({
  type: REMOVE_MESSAGES
});