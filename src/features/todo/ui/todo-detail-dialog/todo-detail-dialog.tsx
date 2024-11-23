import { ClientTodo } from '@entities/todo/model';
import { TodoDetail } from '@features/todo/ui';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import * as styles from './todo-detail-dialog.css.ts';

interface TodoDetailDialogProps {
  todo: ClientTodo;
  onToggle: (id: string) => void;
}

export const TodoDetailDialog = ({ todo, onToggle }: TodoDetailDialogProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.dialogOverlay} />
      <Dialog.Content className={styles.dialogContentContainer}>
        <VisuallyHidden>
          <Dialog.Title />
          <Dialog.Description />
        </VisuallyHidden>
        <div className={styles.dialogContent}>
          <div className={styles.dialogHeader}>
            <Dialog.Close className={styles.dialogCloseButton}>
              <Cross1Icon />
            </Dialog.Close>
          </div>
          <TodoDetail todo={todo} onToggle={onToggle} />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
