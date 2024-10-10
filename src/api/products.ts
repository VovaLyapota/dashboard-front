import axios, { AxiosResponse } from 'axios';

import { Product } from '@/interfaces/Product';
import { GetProductsPropsType } from '@/schemas';

export const getProducts = async (params?: Partial<GetProductsPropsType>) => {
  const { data } = await axios.get<any, AxiosResponse<Product[]>>(`/products`, {
    params,
  });
  return data;
};
