import * as APIUtil from '../util/classes_api_util';

export const RECEIVE_CLASSES = "RECEIVE_CLASSES";

export const receiveClasses = classes => ({
    type: RECEIVE_CLASSES,
    classes
});

export const fetchClasses = (userID) => dispatch => (
    APIUtil.getClasses(userID)
        .then(classes => dispatch(receiveClasses(classes)))
        .catch(err => console.log(err))
);

export const createClass = data  => (
    APIUtil.createClass(data)
      .then( document.location.reload(true))
      .catch(err => console.log(err))
  );