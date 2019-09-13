import { connect } from 'react-redux';
import { fetchPrivateserver } from '../../actions/privateserver_actions';
import { receive_message } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';
import PrivateserverDetail from './privateserver_detail';

const mapStateToProps = (state, ownProps) => ({
  privateserver: state.entities.privateservers[ownProps.match.params.privateserverId],
  messages: Object.values(state.entities.messages)
});

const mapDispatchToProps = dispatch => ({
  requestSinglePrivateserver: privateserverId => dispatch(fetchPrivateserver(privateserverId)),
  receiveMessage: message => dispatch(receive_message(message))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateserverDetail));
