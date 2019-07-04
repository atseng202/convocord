import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => ({
  loggedIn: state.session.userId !== null
});

export default connect(mapStateToProps, null)(Splash);