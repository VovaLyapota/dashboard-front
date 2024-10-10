import { z } from 'zod';

import { OrderStatusEnum } from '@/interfaces/Order';

export const numberType = z.union([z.number().min(0), z.string()]);

export const getOrdersSchema = z.object({
  customer: z.string(),
  quantity: numberType,
  minAmount: numberType,
  maxAmount: numberType,
  status: z.nativeEnum(OrderStatusEnum).optional(),
});

export type GetOrdersPropsType = z.infer<typeof getOrdersSchema>;
