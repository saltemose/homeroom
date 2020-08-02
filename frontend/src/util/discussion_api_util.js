import axios from 'axios';

export const getDiscussions = (messageID) => {
  return axios.get(`/api/discussions?messageID=${messageID}`)
};

export const writeDiscussion = data => {
  return axios.post('/api/discussions', data)
}