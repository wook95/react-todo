import { useAuthStore } from '@/features/auth/model';
import * as styles from '@pages/inbox/ui/Inbox.css';

const Inbox = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className={styles.container}>
      <nav className={styles.sidebarContainer}>
        <div>{user?.email}</div>
        <div>탭</div>
      </nav>

      <div>메일함</div>
    </div>
  );
};

export default Inbox;

//토글그룹 팝오버 다이얼로그
