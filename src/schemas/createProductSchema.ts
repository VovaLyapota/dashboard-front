import { z } from 'zod';

import { ProductCategoryEnum } from '@/interfaces/Product';

import { numberType } from './getOrdersSchema';

export const createProductSchema = z.object({
  photo: z.string().optional(),
  name: z.string(),
  stock: numberType,
  price: numberType,
  category: z.nativeEnum(ProductCategoryEnum).optional(),
  suppliers: z.array(z.number()),
});

export type CreateProductPropsType = z.infer<typeof createProductSchema>;
