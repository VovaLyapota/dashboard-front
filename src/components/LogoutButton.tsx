import { useNavigate } from 'react-router-dom';

import LogoutIcon from '@/assets/icons/exit-icon.svg';
import { ROUTES } from '@/constants';
import { cn } from '@/lib/utils';
import useUserStore from '@/stores/userStore';

import { Button } from './ui/button';

const LogoutButton = ({ className }: { className?: string }) => {
  const { deleteUser } = useUserStore();
  const navigate = useNavigate();

  return (
    <Button
      className={cn('w-10 h-10 p-0 rounded-full', className)}
      onClick={() => {
        deleteUser();
        navigate(ROUTES.AUTH);
      }}
    >
      <LogoutIcon className="w-4 h-4" />
    </Button>
  );
};

export default LogoutButton;
