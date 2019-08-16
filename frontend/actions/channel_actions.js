import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

export const receive_channel = channel => ({
  type: RECEIVE_CHANNEL,
  channel 
});

export const fetchChannel = channelId => dispatch => {
  return ChannelAPIUtil.fetchChannel(channelId).then(
    channel => {
      dispatch(receive_channel(channel));
      return channel;
    }
  );
};

// TODO: - Create channel action + API Util and reducer