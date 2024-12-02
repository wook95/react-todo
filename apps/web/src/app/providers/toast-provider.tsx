import { CustomToast, useToastStore } from '@/shared/ui/toast';
import * as Toast from '@radix-ui/react-toast';
import * as styles from './toast-provider.css';

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const { toast, isOpen, setIsOpenToast } = useToastStore();

  return (
    <Toast.Provider swipeDirection="right">
      {children}
      <Toast.Viewport className={styles.toastViewport} />

      <CustomToast.Root
        open={isOpen}
        onOpenChange={setIsOpenToast}
        duration={1300}
      >
        <CustomToast.Title>{toast?.title}</CustomToast.Title>
      </CustomToast.Root>
    </Toast.Provider>
  );
};
