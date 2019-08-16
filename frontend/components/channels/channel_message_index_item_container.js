import { connect } from 'react-redux';
import ChannelMessageIndexItem from './channel_message_index_item';

const mapStateToProps = (state, ownProps) => ({
  author: state.entities.users[ownProps.message.author_id]
});

export default connect(mapStateToProps, null)(ChannelMessageIndexItem);