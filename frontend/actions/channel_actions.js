import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';

export const RECEIVE_NEW_CHANNEL = 'RECEIVE_NEW_CHANNEL';

export const receive_channel = channel => ({
  type: RECEIVE_CHANNEL,
  channel 
});

export const fetchChannel = channelId => dispatch => {
  return ChannelAPIUtil.fetchChannel(channelId).then(
    channel => {
      dispatch(receive_channel(channel));
      return channel;
    },
    errors => dispatch(receive_channel_errors(errors.responseJSON))
  );
};

// TODO: - Create channel action + API Util and reducer

export const receive_channel_errors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const clear_channel_errors = () => ({
  type: CLEAR_CHANNEL_ERRORS
});

export const receive_new_channel = channel => ({
  type: RECEIVE_NEW_CHANNEL,
  channel
})

export const createSingleChannel = formChannel => dispatch => {
  return ChannelAPIUtil.createChannel(formChannel).then(
    channel => {
      dispatch(receive_new_channel(channel));
    },
    errors => dispatch(receive_channel_errors(errors.responseJSON))
  );
};