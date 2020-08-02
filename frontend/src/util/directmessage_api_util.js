import axios from 'axios';

export const getAllDirectMessagesA = (currentUserID) => {
  return axios.get(`/api/directmessages?participantA=${currentUserID}`)
}

export const getAllDirectMessagesB = (currentUserID) => {
  return axios.get(`/api/directmessages?participantB=${currentUserID}`)
}

export const getDirectMessages = (participantAID, participantBID) => {
  return axios.get(`/api/directmessages?participantA=${participantAID}&participantB=${participantBID}`)
};

export const writeDirectMessage = data => {
  return axios.post('/api/directmessages', data)
}