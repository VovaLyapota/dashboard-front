import { Outlet } from 'react-router-dom';

import Logo from '@/assets/icons/logo-icon.svg';
import { Toaster } from '@/components/ui/toaster';

const AuthLayout = () => {
  return (
    <>
      <header className="flex items-center gap-4 px-5 py-2 md:px-8 xl:px-24">
        <Logo className="h-11 w-11" />
        <p className="text-xl font-semibold text-text">E-pharmacy</p>
      </header>
      <main className="flex-grow overflow-hidden text-text">
        <Outlet />
        <Toaster />
      </main>
    </>
  );
};

export default AuthLayout;
