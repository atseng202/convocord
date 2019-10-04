import { connect } from 'react-redux';
import { closeServerForm, createSingleServer, clear_server_errors, joinSingleServer, fetchSampleServers } from '../../actions/server_actions';
import ServerForm from './server_form';

const mapStateToProps = state => ({
  serverFormOpen: state.ui.serversUI.serverFormOpen,
  errors: state.errors.server,
  sampleInvites: Object.values(state.entities.sampleInvites)
});

const mapDispatchToProps = dispatch => ({
  closeServerForm: () => dispatch(closeServerForm()),
  createServer: (formServer) => dispatch(createSingleServer(formServer)),
  clearServerErrors: () => dispatch(clear_server_errors()),
  joinServer: formServer => dispatch(joinSingleServer(formServer)),
  fetchSampleServers: () => dispatch(fetchSampleServers())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);