import { localStorageKeys } from '@/shared/constant';
import { User, useAuthStore } from '@features/auth/model';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const { setUser, logout } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const setUserStorage = ({ email, token }: User) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, token);
    setUser({ email, token });
  };

  const removeUserStorage = () => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    logout();
  };

  const navigateToApp = () => {
    navigate('/app/inbox');
  };

  return { setUserStorage, removeUserStorage, navigateToApp };
};
