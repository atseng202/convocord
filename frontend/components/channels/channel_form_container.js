import { connect } from 'react-redux';
import { createSingleChannel } from '../../actions/channel_actions';
import ChannelForm from './channel_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.channel
});

const mapDispatchToProps = dispatch => ({
  createChannel: formChannel => dispatch(createSingleChannel(formChannel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);