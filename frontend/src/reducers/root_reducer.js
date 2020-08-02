import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import messages from './messages_reducer';
import discussions from './discussions_reducer';
import students from './students_reducer';
import directmessages from './directmessages_reducer';
import classes from './classes_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  messages,
  discussions,
  students,
  directmessages,
  classes
});

export default RootReducer;