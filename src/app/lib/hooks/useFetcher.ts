import useSWR from 'swr';
import * as api from '../axios';

export const useFetch = () => {
  return {
    GetCountry: () =>
      useSWR('allCountry', async () => {
        const response = await api.getCountry();
        return response;
      }),
  };
};

export const useFetchRandomWord = () => {
  return {
    GetRandomWord: () =>
      useSWR('randomWord', async () => {
        const res = await api.getRandomSearch();
        return res[0];
      }),
  };
};
