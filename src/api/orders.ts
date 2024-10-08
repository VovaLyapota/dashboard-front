import axios, { AxiosResponse } from 'axios';

import { Order } from '@/interfaces/Order';
import { GetOrdersPropsType } from '@/schemas/getOrderSchema';

export const getOrders = async (params?: Partial<GetOrdersPropsType>) => {
  const { data } = await axios.get<any, AxiosResponse<Order[]>>(`/orders`, {
    params,
  });
  return data;
};
