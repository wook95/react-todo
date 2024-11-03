import * as styles from '@features/auth/ui/AuthLayout.css';
import { AuthHeader } from './AuthHeader';

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
