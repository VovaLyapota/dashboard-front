import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { refreshUser } from '@/api';
import Logo from '@/assets/icons/second_logo-icon.svg';
import LogoutButton from '@/components/LogoutButton';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import MobileNav from '@/components/MobileNav';
import NavLinks from '@/components/NavLinks';
import { ROUTES } from '@/constants';
import useUserStore from '@/stores/userStore';

const routeNames = {
  [ROUTES.DASHBOARD]: 'Dashboard',
  [ROUTES.ORDERS]: 'All orders',
  [ROUTES.PRODUCTS]: 'All products',
  [ROUTES.SUPPLIERS]: 'All suppliers',
  [ROUTES.CUSTOMERS]: 'All customers',
};

const SharedLayout = () => {
  const { user, deleteUser } = useUserStore();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { isLoading } = useQuery({
    queryKey: ['refresh-user'],
    queryFn: () => refreshUser(user?.token || ''),
    onError: () => {
      deleteUser();
      navigate(ROUTES.AUTH);
    },
    retry: false,
  });

  return (
    !isLoading && (
      <>
        <header
          className="flex items-center gap-5 border-b border-gray-200 px-5 py-2 text-text md:gap-4 md:px-8
            xl:px-24 xl:py-4"
        >
          <AlignJustify
            className="h-8 w-8 lg:hidden"
            onClick={() => setIsVisible(true)}
          />
          <Link
            to={ROUTES.DASHBOARD}
            className="flex cursor-pointer items-center gap-5 md:gap-8 lg:gap-14"
          >
            <Logo className="h-8 w-8 md:h-10 md:w-10" />
            <div>
              <p className="text-xl font-semibold md:text-2xl">
                Medicine store
              </p>
              <p className="text-xs text-text-foreground">
                {routeNames[pathname as keyof typeof routeNames]} |{' '}
                {user?.email}
              </p>
            </div>
          </Link>
          <LogoutButton className="ml-auto hidden lg:flex" />
        </header>
        <MobileNav isVisible={isVisible} onClose={() => setIsVisible(false)} />
        <main className="flex flex-grow overflow-hidden text-text">
          <nav className="hidden w-20 border-r border-gray-200 px-4 py-10 lg:flex">
            <NavLinks />
          </nav>
          <MaxWidthWrapper className="py-5 md:px-8 lg:px-10">
            <Outlet />
          </MaxWidthWrapper>
        </main>
      </>
    )
  );
};

export default SharedLayout;
