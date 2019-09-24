import { connect } from 'react-redux';
import { openUserPopout, closeUserPopout } from '../../actions/member_ui_actions';
import ServerMemberIndexItem from './server_member_index_item';

const mapStateToProps = (state, ownProps) => ({
  popoutId: state.ui.membersSidebar.showPopoutId,
  member: ownProps.member
});

const mapDispatchToProps = dispatch => ({
  openUserPopout: user => dispatch(openUserPopout(user)),
  closeUserPopout: () => dispatch(closeUserPopout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerMemberIndexItem);