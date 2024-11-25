import { useAuthStore } from '@entities/auth/model';
import { useAuth } from '@features/auth/lib';
import { ChevronDownIcon, PersonIcon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import * as styles from './user-context-menu.css';

export const UserContextMenu = () => {
  const user = useAuthStore((state) => state.user);
  const { logout } = useAuth();

  return (
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
            <li>
              <button className={styles.popoverButton} onClick={logout}>
                로그아웃
              </button>
            </li>
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
