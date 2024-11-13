import { TodoList } from '@features/todo/ui';
import { Sidebar } from '@widgets/sidebar/ui';
import * as styles from './inbox.css';

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
