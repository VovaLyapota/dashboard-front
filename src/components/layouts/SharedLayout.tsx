import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      ReactNode
      <Outlet />
    </div>
  );
};

export default SharedLayout;
