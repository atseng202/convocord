import { connect } from 'react-redux';
import SplashHeader from './splash_header';

const mapStateToProps = state => ({
  loggedIn: state.session.userId !== null
});

export default connect(mapStateToProps, null)(SplashHeader);