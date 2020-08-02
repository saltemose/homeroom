import { connect } from 'react-redux';
import StudentLink from './student_link';
import { fetchDirectMessages } from '../../actions/direct_message_actions';

const mapStateToProps = (state) => {
  return {
    DirectMessages: state.directmessages.all,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDirectMessages: (participantAID, participantBID) => dispatch(fetchDirectMessages(participantAID, participantBID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentLink);
