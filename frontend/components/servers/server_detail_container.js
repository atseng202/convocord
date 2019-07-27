import { connect } from 'react-redux';
import { fetchServer } from '../../actions/server_actions';
import ServerDetail from './server_detail';

const mapStateToProps = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId],
  categories: Object.values(state.entities.categories)
});

const mapDispatchToProps = dispatch => ({
  requestSingleServer: (id) => dispatch(fetchServer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerDetail);