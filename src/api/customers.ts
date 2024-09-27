import axios, { AxiosResponse } from 'axios';

import { Customer } from '@/interfaces/Customer';

export const getCustomers = async () => {
  const { data } = await axios.get<any, AxiosResponse<Customer[]>>(
    '/customers',
  );

  return data;
};
