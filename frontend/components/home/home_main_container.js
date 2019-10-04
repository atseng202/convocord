import { connect } from 'react-redux';
import { closeServerForm, fetchSampleServers } from '../../actions/server_actions';
import { fetchPrivateservers  } from '../../actions/privateserver_actions';
import { closeUserPopout } from '../../actions/member_ui_actions';

import HomeMain from './home_main';

const mapStateToProps = state => ({
  serverFormOpen: state.ui.serversUI.serverFormOpen,
  privateservers: Object.values(state.entities.privateservers),
  popoutOpen: (state.ui.membersSidebar.showPopoutId) ? true : false
});

const mapDispatchToProps = dispatch => ({
  closeServerForm: () => dispatch(closeServerForm()),
  fetchPrivateservers: () => dispatch(fetchPrivateservers()),
  closeUserPopout: () => dispatch(closeUserPopout()),
  fetchSampleServers: () => dispatch(fetchSampleServers())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeMain);