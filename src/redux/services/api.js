import axios from 'axios';
axios.defaults.baseURL = 'https://events-api-nj79.onrender.com';

export async function getEvents() {
    const response = await axios.get('api/events');
    return response; 
}