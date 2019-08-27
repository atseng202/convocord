import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ServerMemberIndex from './server_member_index';
import { moderator } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  members: Object.values(state.entities.users),
  moderator: moderator(state, ownProps)
});

export default withRouter(connect(mapStateToProps, null)(ServerMemberIndex));