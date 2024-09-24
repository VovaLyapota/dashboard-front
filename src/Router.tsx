import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import SharedLayout from './layouts/SharedLayout';
import AuthPage from './pages/AuthPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SharedLayout />,
      children: [
        {
          path: '/',
          element: <div>Children</div>,
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
