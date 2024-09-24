import { useNavigate } from 'react-router-dom';

import LogoutIcon from '@/assets/icons/exit-icon.svg';
import { ROUTES } from '@/constants';
import useUserStore from '@/stores/userStore';

import { Button } from './ui/button';

const LogoutButton = () => {
  const { deleteUser } = useUserStore();
  const navigate = useNavigate();

  return (
    <Button
      className="w-10 h-10 p-0 rounded-full"
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
