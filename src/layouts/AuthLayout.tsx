import { Outlet } from 'react-router-dom';

import Logo from '@/assets/icons/logo-icon.svg';
import Providers from '@/Providers';

const AuthLayout = () => {
  return (
    <Providers>
      <header className="flex items-center gap-4 px-5 py-6 md:px-8 xl:px-24 xl:py-7">
        <Logo className="h-11 w-11" />
        <p className="text-xl font-semibold text-text">E-pharmacy</p>
      </header>
      <main className="flex-grow overflow-hidden text-text">
        <Outlet />
      </main>
    </Providers>
  );
};

export default AuthLayout;
