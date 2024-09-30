import axios, { AxiosResponse } from 'axios';

import { Order } from '@/interfaces/Order';

export const getOrders = async (query: string = '') => {
  const { data } = await axios.get<any, AxiosResponse<Order[]>>(
    `/orders${query}`,
  );
  return data;
};
