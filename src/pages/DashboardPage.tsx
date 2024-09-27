import { useQuery } from 'react-query';

import { getCustomers } from '@/api';
import Infocards from '@/components/Infocards';
import Table from '@/components/Table';

const DashboardPage = () => {
  const { data: customers } = useQuery({
    queryKey: ['fetch-resent-customers'],
    queryFn: getCustomers,
  });

  const tableHeads = {
    name: 'Name',
    email: 'Email',
    spent: 'Spent',
    phone: 'Phone',
    address: 'Address',
  };

  return (
    <>
      <Infocards />
      {customers && (
        <Table caption="Recent customers" heads={tableHeads} rows={customers} />
      )}
    </>
  );
};

export default DashboardPage;
