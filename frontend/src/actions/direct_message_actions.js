import * as APIUtil from '../util/directmessage_api_util';

export const RECEIVE_DIRECTMESSAGES = "RECEIVE_DIRECTMESSAGES";
export const RECEIVE_NEW_DIRECTMESSAGE = "RECEIVE_NEW_DIRECTMESSAGE";
export const RECEIVE_ALL_DIRECTMESSAGESA = "RECEIVE_ALL_DIRECTMESSAGESA";
export const RECEIVE_ALL_DIRECTMESSAGESB = "RECEIVE_ALL_DIRECTMESSAGESB";

export const receiveDirectMessages = directmessages => ({
    type: RECEIVE_DIRECTMESSAGES,
    directmessages
});

export const receiveNewDirectMessage = directmessage => ({
    type: RECEIVE_NEW_DIRECTMESSAGE,
    directmessage
})

export const receiveAllDirectMessagesA = alldirectmessagesA => ({
    type: RECEIVE_ALL_DIRECTMESSAGESA,
    alldirectmessagesA
})

export const receiveAllDirectMessagesB = alldirectmessagesB => ({
    type: RECEIVE_ALL_DIRECTMESSAGESB,
    alldirectmessagesB
})

export const fetchDirectMessages = (participantAID, participantBID) => dispatch => (
    APIUtil.getDirectMessages(participantAID, participantBID)
        .then(directmessages => dispatch(receiveDirectMessages(directmessages)))
        .catch(err => console.log(err))
);

export const composeDirectMessage = data => dispatch => (
    APIUtil.writeDirectMessage(data)
      .then(directmessage => dispatch(receiveNewDirectMessage(directmessage)))
      .catch(err => console.log(err))
  );

  export const fetchAllDirectMessagesA = (currentUserId) => dispatch => (
      APIUtil.getAllDirectMessagesA(currentUserId)
      .then(alldirectmessagesA => dispatch(receiveAllDirectMessagesA(alldirectmessagesA)))
      .catch(err => console.log(err))
  )

  export const fetchAllDirectMessagesB = (currentUserId) => dispatch => (
    APIUtil.getAllDirectMessagesB(currentUserId)
    .then(alldirectmessagesB => dispatch(receiveAllDirectMessagesB(alldirectmessagesB)))
    .catch(err => console.log(err))
)