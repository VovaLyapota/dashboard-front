export enum OrderStatusEnum {
  COMPLETED = 'Completed',
  CONFIRMED = 'Confirmed',
  PENDING = 'Pending',
  CANCELLED = 'Cancelled',
  PROCESSING = 'Processing',
}

export interface Order {
  id: number;
  customerName: string;
  address: string;
  quantity: number;
  amount: number;
  date: string;
  status: OrderStatusEnum;
}
