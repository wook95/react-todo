import { useAuth } from '@/features/auth/lib/guards';
import { useAuthStore } from '@/features/auth/model';
import {
  ChevronDownIcon,
  PersonIcon,
  PlusCircledIcon,
} from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import * as styles from './Sidebar.css';

export const Sidebar = () => {
  const user = useAuthStore((state) => state.user);
  const { logout } = useAuth();

  return (
    <nav className={styles.sidebarContainer}>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            className={styles.sidebarUserContainer}
            aria-label="Update dimensions"
          >
            <PersonIcon className={styles.sidebarUserIcon} />
            {user?.email}
            <ChevronDownIcon />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className={styles.popoverContent}
            sideOffset={5}
            align="start"
          >
            <ul>
              <li>
                <button onClick={logout}>로그아웃</button>
              </li>
            </ul>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <ul className={styles.menuList}>
        <li className={styles.menuItemPlus}>
          <PlusCircledIcon className={styles.menuItemIcon} />
          <button>작업추가</button>
        </li>
        {/* <li>
          <button>관리함</button>
        </li> */}
      </ul>
    </nav>
  );
};
