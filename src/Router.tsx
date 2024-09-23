import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from './components/layouts/AuthLayout';
import SharedLayout from './components/layouts/SharedLayout';

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
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
