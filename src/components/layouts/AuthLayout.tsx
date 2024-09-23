import { Outlet } from 'react-router-dom';

import Logo from '@/assets/icons/logo-icon.svg';

const AuthLayout = () => {
  return (
    <>
      <header className="flex items-center gap-4 px-5 py-6 md:px-8 xl:px-24 xl:py-7">
        <Logo className="h-11 w-11" />
        <p className="text-xl font-semibold">E-pharmacy</p>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
