import { Todo } from '@entities/todo/model';
import { todoMutations, todoQueries } from '@features/todo/api';
import * as Dialog from '@radix-ui/react-dialog';
import { TrashIcon } from '@radix-ui/react-icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as styles from './delete-todo.css';

interface DeleteTodoProps {
  todoId: string;
  onClose: () => void;
}

export const DeleteTodo = ({ todoId, onClose }: DeleteTodoProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...todoMutations.delete(),
    onSuccess: () => {
      queryClient.setQueryData(todoQueries.lists(), (old: Todo[] = []) =>
        old.filter((todo) => todo.id !== todoId),
      );
      queryClient.invalidateQueries({ queryKey: todoQueries.lists() });
      onClose();
    },
  });

  const onDelete = async () => {
    mutate(todoId);
  };

  return (
    <div className={styles.deleteTodoContainer}>
      <Dialog.Root
        onOpenChange={(open) => {
          if (!open) {
            onClose();
          }
        }}
      >
        <Dialog.Trigger className={styles.dialogTrigger}>
          <TrashIcon />
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
            </Dialog.Description>
            <div className={styles.buttonWrapper}>
              <button className={styles.deleteButton} onClick={onDelete}>
                삭제
              </button>

              <Dialog.Close asChild>
                <button className={styles.cancelButton}>취소</button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
