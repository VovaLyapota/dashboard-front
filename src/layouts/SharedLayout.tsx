import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Logo from '@/assets/icons/second_logo-icon.svg';
import MobileNav from '@/components/MobileNav';
import { ROUTES } from '@/constants';
import Providers from '@/Providers';
import useUserStore from '@/stores/userStore';

const routeNames = {
  [ROUTES.DASHBOARD]: 'Dashboard',
  [ROUTES.ORDERS]: 'All orders',
  [ROUTES.PRODUCTS]: 'All products',
  [ROUTES.SUPPLIERS]: 'All suppliers',
  [ROUTES.CUSTOMERS]: 'All customers',
};

const SharedLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();
  const { email } = useUserStore().user!;

  return (
    <Providers>
      <header className="flex gap-5 items-center text-text px-5 py-4 md:px-8 xl:px-24 xl:py-7 border-b-[1px] border-gray-200">
        <AlignJustify
          className="w-8 h-8 lg:hidden"
          onClick={() => setIsVisible(true)}
        />
        <Link
          to={ROUTES.DASHBOARD}
          className="flex items-center gap-5 cursor-pointer"
        >
          <Logo className="h-8 w-8" />
          <div>
            <p className="text-xl font-semibold">Medicine store</p>
            <p className="text-xs text-text-foreground">
              {routeNames[pathname as keyof typeof routeNames]} | {email}
            </p>
          </div>
        </Link>
      </header>
      <MobileNav isVisible={isVisible} onClose={() => setIsVisible(false)} />
      <main className="text-text flex-grow overflow-hidden">
        <Outlet />
      </main>
    </Providers>
  );
};

export default SharedLayout;
