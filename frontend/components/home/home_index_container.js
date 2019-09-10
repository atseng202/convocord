import { connect } from 'react-redux';
import HomeIndex from './home_index';

const mapStateToProps = state => ({
  privateservers: Object.values(state.entities.privateservers)
});

export default connect(mapStateToProps, null)(HomeIndex);