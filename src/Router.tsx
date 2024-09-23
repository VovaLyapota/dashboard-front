import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SharedLayout from './components/SharedLayout';

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
      element: <SharedLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
