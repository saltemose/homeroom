import { connect } from 'react-redux';
import dashboard from './dashboard';
import { composeMessage, fetchMessages} from '../../actions/message_actions';
import { fetchDiscussions, composeDiscussionMessage } from '../../actions/discussion_actions'
import { fetchStudents } from '../../actions/student_actions';
import { fetchClasses, createClass} from '../../actions/class_actions';
import { fetchDirectMessages, composeDirectMessage, fetchAllDirectMessagesA, fetchAllDirectMessagesB } from '../../actions/direct_message_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    messages: state.messages.all,
    newMessage: state.messages.new,
    discussions: state.discussions.all,
    newDiscussionMessage: state.discussions.new,
    students: state.students,
    directMessages: state.directmessages.all,
    newDirectMessage: state.directmessages.new,
    classes: state.classes.data,
    allDMsA: state.directmessages.allDMsA,
    allDMsB: state.directmessages.allDMsB
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeMessage: data => dispatch(composeMessage(data)),
    fetchMessages: (classID) => dispatch(fetchMessages(classID)),
    composeDiscussionMessage: (messageID) => dispatch(composeDiscussionMessage(messageID)),
    fetchDiscussions: (messageID) => dispatch(fetchDiscussions(messageID)),
    fetchStudents: () => dispatch(fetchStudents()),
    fetchClasses: (userID) => dispatch(fetchClasses(userID)),
    createClass: data => dispatch(createClass(data)),
    fetchDirectMessages: (participantAID, participantBID) => dispatch(fetchDirectMessages(participantAID, participantBID)),
    fetchAllDirectMessagesA: (currentUserID) => dispatch(fetchAllDirectMessagesA(currentUserID)), 
    fetchAllDirectMessagesB: (currentUserID) => dispatch(fetchAllDirectMessagesB(currentUserID)),
    composeDirectMessage: data => dispatch(composeDirectMessage(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
