import { UserContextMenu } from '@/features/auth/ui';
import { TodoCreatePopover } from '@/features/todo/ui';
import * as styles from './sidebar.css';

export const Sidebar = () => {
  return (
    <nav className={styles.sidebarContainer}>
      <UserContextMenu />

      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <TodoCreatePopover />
        </li>
      </ul>
    </nav>
  );
};
