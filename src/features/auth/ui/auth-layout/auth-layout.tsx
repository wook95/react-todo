import * as styles from '@features/auth/ui/auth-layout/auth-layout.css';
import { AuthHeader } from './auth-header';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <AuthHeader />
        {children}
      </div>
    </div>
  );
};
