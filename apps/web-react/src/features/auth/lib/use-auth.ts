import { localStorageKeys } from '@/shared/constant';
import { User, useAuthStore } from '@entities/auth/model';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const { setUser, removeUserFromStore } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const setUserStorage = ({ email, token }: User) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, token);
    localStorage.setItem(localStorageKeys.USER_EMAIL, email);
    setUser({ email, token });
  };

  const removeUserStorage = () => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    localStorage.removeItem(localStorageKeys.USER_EMAIL);
    removeUserFromStore();
  };

  const navigateToApp = () => {
    navigate('/app/inbox');
  };

  const navigateToLogin = () => {
    navigate('/auth/sign-in');
  };

  const logout = () => {
    removeUserStorage();
    navigateToLogin();
  };

  return {
    setUserStorage,
    removeUserStorage,
    navigateToApp,
    navigateToLogin,
    logout,
  };
};
