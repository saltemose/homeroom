import * as StudentAPIUtil from '../util/user_api';

export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";

export const receiveStudents = students => ({
    type: RECEIVE_STUDENTS,
    students
});

export const fetchStudents = () => dispatch => (
    StudentAPIUtil.getStudents()
    .then(students => dispatch(receiveStudents(students)))
    .catch(err => console.log(err))
);