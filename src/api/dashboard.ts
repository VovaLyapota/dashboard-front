import axios, { AxiosResponse } from 'axios';

import { Dashboard } from '@/interfaces/Dashboard';

export const getDashboard = async () => {
  const { data } = await axios.get<any, AxiosResponse<any, Dashboard>>(
    '/dashboard',
  );
  return data;
};
