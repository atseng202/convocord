import { connect } from 'react-redux';
import PrivateserverMessageIndexItem from './privateserver_message_index_item';

const mapStateToProps = (state, ownProps) => ({
  author: state.entities.users[ownProps.message.author_id],
  currentUserId: state.session.userId
});

export default connect(mapStateToProps, null)(PrivateserverMessageIndexItem);