import { localStorageKeys } from '@/shared/constant';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../model';

interface GuardProps {
  children: React.ReactNode;
}

export const UnAuthGuard = ({ children }: GuardProps) => {
  const { user, setUser } = useAuthStore();

  if (!user) {
    const email = localStorage.getItem(localStorageKeys.USER_EMAIL);
    const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if (email && token) {
      setUser({ email, token });
      return <Navigate to="/app/inbox" replace />;
    } else {
      return <>{children}</>;
    }
  }

  return <Navigate to="/app/inbox" replace />;
};
