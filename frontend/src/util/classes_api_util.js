import axios from 'axios';

export const getClasses = (userID) => {
  return axios.get(`/api/classes?users=${userID}`)
};

export const createClass = data => {
  return axios.post('/api/classes', data)
}