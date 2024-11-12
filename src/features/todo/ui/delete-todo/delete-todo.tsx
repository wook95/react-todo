import * as Dialog from '@radix-ui/react-dialog';
import { TrashIcon } from '@radix-ui/react-icons';
import { TodoApiService } from '../../api/todo-api.service';
import * as styles from './delete-todo.css';

interface DeleteTodoProps {
  todoId: string;
  onClose: () => void;
}

export const DeleteTodo = ({ todoId, onClose }: DeleteTodoProps) => {
  const onDelete = async () => {
    await TodoApiService.deleteTodo(todoId);
    onClose();
  };

  return (
    <div className={styles.deleteTodoContainer}>
      <TrashIcon />

      <Dialog.Root
        onOpenChange={(open) => {
          if (!open) {
            onClose();
          }
        }}
      >
        <Dialog.Trigger>
          <span>삭제</span>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.dialogOverlay} />
          <Dialog.Content className={styles.dialogContent}>
            <Dialog.Title className={styles.dialogTitle}>
              정말 삭제하시겠습니까?
            </Dialog.Title>
            <Dialog.Description>
              <span>삭제하면 복구할 수 없습니다.</span>
              <div className={styles.buttonWrapper}>
                <button className={styles.deleteButton} onClick={onDelete}>
                  삭제
                </button>
                <button className={styles.cancelButton} onClick={onClose}>
                  취소
                </button>
              </div>
            </Dialog.Description>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
