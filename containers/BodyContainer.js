import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { rollCharacter } from '../actions';
import Body from '../components/Body';


const mapStateToProps = state => ({
  character: state.character
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    rollCharacter
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
