import { Link, useLocation } from 'react-router-dom';

import CustomersIcon from '@/assets/icons/customers_page-icon.svg';
import DashboardIcon from '@/assets/icons/main_page-icon.svg';
import OrdersIcon from '@/assets/icons/orders_page-icon.svg';
import ProductsIcon from '@/assets/icons/products_page-icon.svg';
import SuppliersIcon from '@/assets/icons/suppliers_page-icon.svg';
import { ROUTES } from '@/constants';
import { cn } from '@/lib/utils';

import { buttonVariants } from './ui/button';

const navigateRoutes = [
  { path: ROUTES.DASHBOARD, Icon: DashboardIcon },
  { path: ROUTES.CUSTOMERS, Icon: CustomersIcon },
  { path: ROUTES.ORDERS, Icon: OrdersIcon },
  { path: ROUTES.PRODUCTS, Icon: ProductsIcon },
  { path: ROUTES.SUPPLIERS, Icon: SuppliersIcon },
];

const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => {
  const { pathname } = useLocation();
  return (
    <ul className="flex flex-col gap-4 mb-auto">
      {navigateRoutes.map((route) => {
        const isCurrentPath = pathname === route.path;

        return (
          <li key={route.path} onClick={onNavigate}>
            <Link
              to={route.path}
              className={cn(
                buttonVariants({ variant: 'secondary' }),
                'w-10 h-10 md:w-11 md:h-11 p-0 rounded-full bg-white',
              )}
            >
              <route.Icon
                className={cn('w-4 h-4', {
                  'fill-green-600': isCurrentPath,
                  'fill-gray-icon': !isCurrentPath,
                })}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
