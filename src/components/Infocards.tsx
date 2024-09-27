import { useQuery } from 'react-query';

import { getDashboard } from '@/api/dashboard';
import CustomersIcon from '@/assets/icons/people-icon.svg';
import DbIcon from '@/assets/icons/products-icon.svg';

const Infocards = () => {
  const { data: dashboard } = useQuery({
    queryKey: ['fetch-dashboard'],
    queryFn: getDashboard,
  });

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fit,240px)] gap-5 ">
      {dashboard && (
        <>
          <li className="h-24 p-3 flex flex-col justify-between border border-gray-200 bg-white rounded-lg">
            <div className="flex gap-1 items-start">
              <DbIcon className="w-4 h-4 md:w-5 md:h-5" />
              <p className="text-xs text-text-foreground">All products</p>
            </div>
            <p className="text-text font-semibold md:text-2xl">
              {dashboard.products}
            </p>
          </li>
          <li className="h-24 p-3 flex flex-col justify-between border border-gray-200 bg-white rounded-lg">
            <div className="flex gap-1 items-start">
              <DbIcon className="w-4 h-4 md:w-5 md:h-5" />
              <p className="text-xs text-text-foreground">All suppliers</p>
            </div>
            <p className="text-text font-semibold md:text-2xl">
              {dashboard.suppliers}
            </p>
          </li>
          <li className="h-24 p-3 flex flex-col justify-between border border-gray-200 bg-white rounded-lg">
            <div className="flex gap-1 items-start">
              <CustomersIcon className="w-4 h-4 md:w-5 md:h-5" />
              <p className="text-xs text-text-foreground">All customers</p>
            </div>
            <p className="text-text font-semibold md:text-2xl">
              {dashboard.customers}
            </p>
          </li>
        </>
      )}
    </ul>
  );
};

export default Infocards;
