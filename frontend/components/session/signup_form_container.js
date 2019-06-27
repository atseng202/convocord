import { connect } from 'react-redux';
import { signup, clear_session_errors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "signup"
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(signup(formUser)),
  clearErrors: () => dispatch(clear_session_errors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm); 
