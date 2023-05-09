import axios from 'axios';

const ApiKey = process.env.NEXT_PUBLIC_IP_API_KEY;
const Cx = process.env.NEXT_PUBLIC_API_CX;

const api = axios.create({
  baseURL: 'https://ipapi.co/8.8.8.8/json/',
});

export const getCountry = async () => {
  try {
    const response = await api.get('');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRandomSearch = async () => {
  try {
    const res = await axios.get('https://random-word-api.herokuapp.com/word');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
