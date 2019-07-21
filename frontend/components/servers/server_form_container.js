import { connect } from 'react-redux';
import { closeServerForm, createSingleServer, clear_server_errors } from '../../actions/server_actions';
import ServerForm from './server_form';

const mapStateToProps = state => ({
  serverFormOpen: state.ui.serversUI.serverFormOpen,
  errors: state.errors.server
});

const mapDispatchToProps = dispatch => ({
  closeServerForm: () => dispatch(closeServerForm()),
  createServer: (formServer) => dispatch(createSingleServer(formServer)),
  clearServerErrors: () => dispatch(clear_server_errors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);