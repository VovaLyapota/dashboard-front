import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Logo from '@/assets/icons/second_logo-icon.svg';
import MobileNav from '@/components/MobileNav';
import Providers from '@/Providers';
import useUserStore from '@/stores/userStore';

const routeNames = {
  dashboard: 'Dashboard',
  orders: 'All orders',
  products: 'All products',
  suppliers: 'All suppliers',
  customers: 'All customers',
};

const SharedLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();
  const { email } = useUserStore().user!;
  const routeName = pathname.split('/')[1] as keyof typeof routeNames;

  return (
    <Providers>
      <header className="flex gap-5 items-center text-text px-5 py-6 md:px-8 xl:px-24 xl:py-7">
        <AlignJustify
          className="w-8 h-8 lg:hidden"
          onClick={() => setIsVisible(true)}
        />
        <Link
          to={'/dashboard'}
          className="flex items-center gap-5 cursor-pointer"
        >
          <Logo className="h-8 w-8" />
          <div>
            <p className="text-xl font-semibold">Medicine store</p>
            <p className="text-xs text-text-foreground">
              {routeNames[routeName]} | {email}
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
