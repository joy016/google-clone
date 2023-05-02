import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ipapi.co/8.8.8.8/json/',
});

export const getCountry = async () => {
  try {
    const response = await api.get('');
    console.log('axios - response:', response);
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
