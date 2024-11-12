import { TodoList } from '@/features/todo';
import { Sidebar } from '@/widgets/sidebar';
import * as styles from '@pages/inbox/ui/Inbox.css';

const Inbox = () => {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.inboxContainer}>
        <h2 className={styles.inboxTitle}>Inbox</h2>
        <TodoList />
      </div>
    </div>
  );
};

export default Inbox;

// todo: index 정리, 파일 이름 정리
