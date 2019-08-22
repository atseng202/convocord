import { connect } from 'react-redux';
import { fetchServer, selectServerChannel } from '../../actions/server_actions';
import ServerDetail from './server_detail';

const mapStateToProps = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId],
  categories: Object.values(state.entities.categories),
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = dispatch => ({
  requestSingleServer: (id) => dispatch(fetchServer(id)),
  hoverServerChannel: channelId => dispatch(selectServerChannel(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerDetail);