import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_NEW_MESSAGE = "RECEIVE_NEW_MESSAGE";

export const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages
});

export const receiveNewMessage = message => ({
    type: RECEIVE_NEW_MESSAGE,
    message
})

export const fetchMessages = (classID) => dispatch => (
    APIUtil.getMessages(classID)
        .then(messages => dispatch(receiveMessages(messages)))
        .catch(err => console.log(err))
);

export const composeMessage = data => dispatch => (
    APIUtil.writeMessage(data)
      .then(message => dispatch(receiveNewMessage(message)))
      .catch(err => console.log(err))
  );