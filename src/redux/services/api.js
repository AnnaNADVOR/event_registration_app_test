import axios from 'axios';
// axios.defaults.baseURL = 'https://events-api-nj79.onrender.com';
axios.defaults.baseURL = 'http://localhost:2000';

export async function getEvents() {
  const response = await axios.get('api/events');
  return response.data;
}

export async function getEventById(eventId) {
  const response = await axios.get(`api/events/${eventId}`)
  return response.data;
}

export async function addParticipant(data) {
  const response = await axios.post('api/participants', data);
  return response.data;
}

export async function getParticipantsByEventId(eventId) {
  const axiosParams = {
    eventId,
  };

  const response = await axios.get('api/participants', {
    params: axiosParams,
  });

  return response.data;
}
