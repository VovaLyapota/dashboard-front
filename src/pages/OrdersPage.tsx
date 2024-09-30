import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import { getOrders } from '@/api/orders';
import { OrdersFilterForm } from '@/components/forms';
import Table from '@/components/Table';

const OrdersPage = () => {
  const { search: queryString } = useLocation();
  const { data: orders } = useQuery({
    queryKey: ['fetch-orders', queryString],
    queryFn: () => getOrders(queryString || ''),
  });

  const tableHeads = {
    customerName: 'Customer',
    address: 'Address',
    quantity: 'Products',
    date: 'Order date',
    amount: 'Price',
    status: 'Status',
  };

  return (
    <>
      <OrdersFilterForm />
      {orders && (
        <Table caption="All orders" heads={tableHeads} rows={orders} />
      )}
    </>
  );
};

export default OrdersPage;
