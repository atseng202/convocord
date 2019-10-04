import { connect } from 'react-redux';
import { toggleInactivePrivateserver, fetchPrivateservers } from '../../actions/privateserver_actions';
import HomeIndex from './home_index';

const mapStateToProps = state => ({
  privateservers: Object.values(state.entities.privateservers),
  privateserverIds: Object.keys(state.entities.privateservers)
});

const mapDispatchToProps = dispatch => ({
  removePrivateserver: privateserverId => dispatch(toggleInactivePrivateserver(privateserverId)),
  fetchPrivateservers: () => dispatch(fetchPrivateservers())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);