import { z } from 'zod';

import { ProductCategoryEnum } from '@/interfaces/Product';

import { numberType } from './getOrdersSchema';

export const getProductsSchema = z.object({
  stock: numberType,
  minPrice: numberType,
  maxPrice: numberType,
  category: z.nativeEnum(ProductCategoryEnum).optional(),
});

export type GetProductsPropsType = z.infer<typeof getProductsSchema>;
