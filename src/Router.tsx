import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import SharedLayout from './layouts/SharedLayout';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SharedLayout />,
      errorElement: <div>Not found</div>,
      children: [
        {
          path: '/dashboard',
          element: <DashboardPage />,
        },
      ],
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [{ path: '/auth', element: <AuthPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
