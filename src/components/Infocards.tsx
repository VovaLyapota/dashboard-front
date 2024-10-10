import { useQuery } from 'react-query';

import { getDashboard } from '@/api';
import CustomersIcon from '@/assets/icons/people-icon.svg';
import DbIcon from '@/assets/icons/products-icon.svg';

const Infocards = () => {
  const { data: dashboard } = useQuery({
    queryKey: ['fetch-dashboard'],
    queryFn: getDashboard,
  });

  return (
    <ul
      className="mb-5 grid
        grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 lg:grid-cols-[repeat(auto-fit,240px)]"
    >
      {dashboard && (
        <>
          <li
            className="flex h-24 flex-col justify-between rounded-lg border border-gray-200 bg-white
              p-3"
          >
            <div className="flex items-start gap-1">
              <DbIcon className="h-4 w-4 md:h-5 md:w-5" />
              <p className="text-xs text-text-foreground">All products</p>
            </div>
            <p className="font-semibold text-text md:text-2xl">
              {dashboard.products}
            </p>
          </li>
          <li
            className="flex h-24 flex-col justify-between rounded-lg border border-gray-200 bg-white
              p-3"
          >
            <div className="flex items-start gap-1">
              <DbIcon className="h-4 w-4 md:h-5 md:w-5" />
              <p className="text-xs text-text-foreground">All suppliers</p>
            </div>
            <p className="font-semibold text-text md:text-2xl">
              {dashboard.suppliers}
            </p>
          </li>
          <li
            className="flex h-24 flex-col justify-between rounded-lg border border-gray-200 bg-white
              p-3"
          >
            <div className="flex items-start gap-1">
              <CustomersIcon className="h-4 w-4 md:h-5 md:w-5" />
              <p className="text-xs text-text-foreground">All customers</p>
            </div>
            <p className="font-semibold text-text md:text-2xl">
              {dashboard.customers}
            </p>
          </li>
        </>
      )}
    </ul>
  );
};

export default Infocards;
