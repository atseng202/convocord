import { connect } from 'react-redux';
import ChannelIndexItem from './channel_index_item';
import { selectServerChannel } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => ({
  isSelected: state.ui.channels.selectedChannelId === ownProps.channel.id
});

const mapDispatchToProps = dispatch => ({
  hoverServerChannel: (channelId) => dispatch(selectServerChannel(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem);