import { connect } from 'react-redux';
import { closeUserPopout } from '../../actions/member_ui_actions';
import { createSingleMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';
import ServerMemberPopout from './server_member_popout';

const mapStateToProps = (state, ownProps) => ({
  authorId: state.session.userId,
  popoutOpen: (state.ui.membersSidebar.showPopoutId && state.ui.membersSidebar.showPopoutId === ownProps.member.id) ? true : false
});

const mapDispatchToProps = dispatch => ({
  createMessage: (formMessage) => dispatch(createSingleMessage(formMessage)),
  closeUserPopout: () => dispatch(closeUserPopout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerMemberPopout));