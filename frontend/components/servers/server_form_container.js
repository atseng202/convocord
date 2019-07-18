import { connect } from 'react-redux';
import { closeServerForm } from '../../actions/server_actions';
import ServerForm from './server_form';

const mapStateToProps = state => ({
  serverFormOpen: state.ui.serversUI.serverFormOpen
});

const mapDispatchToProps = dispatch => ({
  closeServerForm: () => dispatch(closeServerForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);