import { connect } from 'react-redux';
import { fetchChannel } from '../../actions/channel_actions';
import { receive_message } from '../../actions/message_actions';
import ChannelDetail from './channel_detail';

const mapStateToProps = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channelId],
  messages: Object.values(state.entities.messages)
});

const mapDispatchToProps = dispatch => ({
  requestSingleChannel: channelId => dispatch(fetchChannel(channelId)),
  receiveMessage: (message) => dispatch(receive_message(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);