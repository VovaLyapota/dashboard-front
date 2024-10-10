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
  { path: ROUTES.ORDERS, Icon: OrdersIcon },
  { path: ROUTES.PRODUCTS, Icon: ProductsIcon },
  { path: ROUTES.CUSTOMERS, Icon: CustomersIcon },
  { path: ROUTES.SUPPLIERS, Icon: SuppliersIcon },
];

const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => {
  const { pathname } = useLocation();
  return (
    <ul className="mb-auto flex flex-col gap-4">
      {navigateRoutes.map((route) => {
        const isCurrentPath = pathname === route.path;

        return (
          <li key={route.path} onClick={onNavigate}>
            <Link
              to={route.path}
              className={cn(
                buttonVariants({ variant: 'secondary' }),
                'h-10 w-10 rounded-full bg-white p-0 md:h-11 md:w-11',
              )}
            >
              <route.Icon
                className={cn('h-4 w-4', {
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
