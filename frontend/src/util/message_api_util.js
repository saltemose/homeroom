import axios from 'axios';

export const getMessages = (classID) => {
  return axios.get(`/api/messages?classID=${classID}`)
};

export const writeMessage = data => {
  return axios.post('/api/messages', data)
}