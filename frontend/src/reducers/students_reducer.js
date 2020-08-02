import { RECEIVE_STUDENTS } from '../actions/student_actions';

const StudentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_STUDENTS:
            newState = action.students.data
            return newState;
        default:
            return state;
    }
}

export default StudentsReducer;