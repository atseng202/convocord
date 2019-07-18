import { connect } from 'react-redux';
import { closeServerForm } from '../../actions/server_actions';
import HomeMain from './home_main';

const mapStateToProps = state => ({
  serverFormOpen: state.ui.serversUI.serverFormOpen
});

const mapDispatchToProps = dispatch => ({
  closeServerForm: () => dispatch(closeServerForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeMain);