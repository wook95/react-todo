import { Sidebar } from '@widgets/sidebar/ui';
import { TodoList } from '@widgets/todo-list/ui';
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
