import { localStorageKeys } from '@/shared/constant';
import { useAuthStore } from '@entities/auth/model';
import { Navigate } from 'react-router-dom';

interface GuardProps {
  children: React.ReactNode;
}

export const AuthGuard = ({ children }: GuardProps) => {
  const { user, setUser } = useAuthStore();

  if (!user) {
    const email = localStorage.getItem(localStorageKeys.USER_EMAIL);
    const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if (email && token) {
      setUser({ email, token });
      return <>{children}</>;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};
