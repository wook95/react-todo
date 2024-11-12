import { useAuth } from '@/features/auth/lib';
import { useAuthStore } from '@/features/auth/model';
import { TodoCreatePopover } from '@/features/todo';
import {
  ChevronDownIcon,
  PersonIcon,
  PlusCircledIcon,
} from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';
import * as styles from './Sidebar.css';

export const Sidebar = () => {
  const user = useAuthStore((state) => state.user);
  const { logout } = useAuth();
  const [isOpenPopover, setIsOpenPopover] = useState(false);

  return (
    <nav className={styles.sidebarContainer}>
      <Popover.Root>
        <Popover.Trigger>
          <div className={styles.sidebarUserContainer}>
            <PersonIcon className={styles.sidebarUserIcon} />
            {user?.email}
            <ChevronDownIcon />
          </div>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className={styles.popoverContent}
            sideOffset={5}
            align="start"
          >
            <ul>
              <li onClick={logout}>로그아웃</li>
            </ul>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <ul className={styles.menuList}>
        <Popover.Root open={isOpenPopover} onOpenChange={setIsOpenPopover}>
          <Popover.Trigger>
            <li className={styles.menuItemPlus}>
              <PlusCircledIcon className={styles.menuItemIcon} />
              <span>작업추가</span>
            </li>
          </Popover.Trigger>
          <TodoCreatePopover onClose={() => setIsOpenPopover(false)} />
        </Popover.Root>
      </ul>
    </nav>
  );
};
