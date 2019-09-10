import { connect } from 'react-redux';
import { closeServerForm } from '../../actions/server_actions';
import { fetchPrivateservers  } from '../../actions/privateserver_actions';

import HomeMain from './home_main';

const mapStateToProps = state => ({
  serverFormOpen: state.ui.serversUI.serverFormOpen,
  privateservers: Object.values(state.entities.privateservers)
});

const mapDispatchToProps = dispatch => ({
  closeServerForm: () => dispatch(closeServerForm()),
  fetchPrivateservers: () => dispatch(fetchPrivateservers())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeMain);