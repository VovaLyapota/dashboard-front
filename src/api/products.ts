import axios, { AxiosResponse } from 'axios';

import { Product } from '@/interfaces/Product';
import { GetProductsPropsType } from '@/schemas';
import { CreateProductPropsType } from '@/schemas/createProductSchema';

export const getProducts = async (params?: Partial<GetProductsPropsType>) => {
  const { data } = await axios.get<any, AxiosResponse<Product[]>>(`/products`, {
    params,
  });
  return data;
};

export const createProduct = async (product: CreateProductPropsType) => {
  const { data } = await axios.post<any, AxiosResponse<Product>>(
    '/products',
    product,
  );
  return data;
};
