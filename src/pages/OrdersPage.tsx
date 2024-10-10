import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import { getOrders } from '@/api/orders';
import { OrdersFilterForm } from '@/components/forms';
import Table from '@/components/Table';
import useQueryParams from '@/hooks/useQueryParams';
import { OrderStatusEnum } from '@/interfaces/Order';
import { cn } from '@/lib/utils';

export const OrderStatusStyles = {
  [OrderStatusEnum.PENDING]: 'bg-orange-200 text-orange-600',
  [OrderStatusEnum.PROCESSING]: 'bg-blue-200 text-blue-600',
  [OrderStatusEnum.CONFIRMED]: 'bg-purple-200 text-purple-600',
  [OrderStatusEnum.CANCELLED]: 'bg-red-200 text-red-600',
  [OrderStatusEnum.COMPLETED]: 'bg-green-200 text-green-600',
};

const OrdersPage = () => {
  const { getQueryParams } = useQueryParams();

  const { search } = useLocation();
  const { data: orders, isLoading } = useQuery({
    queryKey: ['fetch-orders', search],
    queryFn: () => getOrders(getQueryParams()),
    retry: false,
  });

  const tableHeads = {
    customerName: 'Customer',
    address: 'Address',
    quantity: 'Products',
    date: 'Order date',
    amount: 'Price',
    status: 'Status',
  };

  const formatOrders = (orders: { status: OrderStatusEnum }[]) => {
    return orders.map((order) => ({
      ...order,
      status: (
        <span
          className={cn(
            'rounded-xl bg-gray-200 px-2 py-1 text-sm font-medium text-gray-600',
            OrderStatusStyles[order.status],
          )}
        >
          {order.status}
        </span>
      ),
    }));
  };

  return (
    <>
      <OrdersFilterForm isSearching={isLoading} />
      {orders && (
        <Table
          caption="All orders"
          heads={tableHeads}
          rows={formatOrders(orders)}
        />
      )}
    </>
  );
};

export default OrdersPage;
