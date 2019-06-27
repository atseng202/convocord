import { connect } from 'react-redux';
import { login, clear_session_errors  } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "login"
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(login(formUser)),
  clearErrors: () => dispatch(clear_session_errors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm); 
