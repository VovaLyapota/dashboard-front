import { useNavigate } from 'react-router-dom';

import { logoutUser } from '@/api';
import LogoutIcon from '@/assets/icons/exit-icon.svg';
import { ROUTES } from '@/constants';
import { cn } from '@/lib/utils';
import useUserStore from '@/stores/userStore';

import { Button } from './ui/button';

const LogoutButton = ({ className }: { className?: string }) => {
  const { deleteUser } = useUserStore();
  const navigate = useNavigate();

  const onLogout = async () => {
    await logoutUser();
    deleteUser();
    navigate(ROUTES.AUTH);
  };

  return (
    <Button
      className={cn('h-10 w-10 rounded-full p-0', className)}
      onClick={onLogout}
    >
      <LogoutIcon className="h-4 w-4" />
    </Button>
  );
};

export default LogoutButton;
