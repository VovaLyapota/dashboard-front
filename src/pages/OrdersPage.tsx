import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import { getOrders } from '@/api/orders';
import { OrdersFilterForm } from '@/components/forms';
import Table from '@/components/Table';
import useQueryParams from '@/hooks/useQueryParams';

const OrdersPage = () => {
  const { search: queryString } = useLocation();
  const { getQueryParams } = useQueryParams();

  const { data: orders, isLoading } = useQuery({
    queryKey: ['fetch-orders', queryString],
    queryFn: () => getOrders(getQueryParams()),
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
      <OrdersFilterForm isSearching={isLoading} />
      {orders && (
        <Table caption="All orders" heads={tableHeads} rows={orders} />
      )}
    </>
  );
};

export default OrdersPage;
