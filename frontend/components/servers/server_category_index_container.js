import { connect } from 'react-redux';
import { clear_channel_errors } from '../../actions/channel_actions';
import ServerCategoryIndex from './server_category_index';

const mapStateToProps = state => ({
  userId: state.session.userId
});

const mapDispatchToProps = dispatch => ({
  clearChannelErrors: () => dispatch(clear_channel_errors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerCategoryIndex);