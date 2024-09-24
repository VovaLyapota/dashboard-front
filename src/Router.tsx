import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from './constants';
import AuthLayout from './layouts/AuthLayout';
import SharedLayout from './layouts/SharedLayout';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.DASHBOARD,
      element: <SharedLayout />,
      errorElement: <div>Not found</div>,
      children: [
        {
          path: ROUTES.DASHBOARD,
          element: <DashboardPage />,
        },
        {
          path: ROUTES.CUSTOMERS,
          element: <DashboardPage />,
        },
        {
          path: ROUTES.ORDERS,
          element: <DashboardPage />,
        },
        {
          path: ROUTES.PRODUCTS,
          element: <DashboardPage />,
        },
        {
          path: ROUTES.SUPPLIERS,
          element: <DashboardPage />,
        },
      ],
    },
    {
      path: ROUTES.AUTH,
      element: <AuthLayout />,
      children: [{ path: ROUTES.AUTH, element: <AuthPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
