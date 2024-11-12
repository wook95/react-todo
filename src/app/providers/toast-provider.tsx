import * as Toast from '@radix-ui/react-toast';
import * as styles from './toast-provider.css';

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Toast.Provider swipeDirection="right">
      {children}
      <Toast.Viewport className={styles.toastViewport} />
    </Toast.Provider>
  );
};
