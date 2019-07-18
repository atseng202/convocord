import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchServers, openServerForm } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers)
});

const mapDispatchToProps = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  openServerForm: () => dispatch(openServerForm())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerIndex));