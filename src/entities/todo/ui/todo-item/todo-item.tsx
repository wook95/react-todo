import { CheckboxGroup, Toast } from '@/shared/ui';
import { ClientTodo } from '@entities/todo/model';
import { DeleteTodo, TodoToggle } from '@features/todo/ui';
import * as Dialog from '@radix-ui/react-dialog';
import { DotsHorizontalIcon, Pencil1Icon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';
import * as styles from './todo-item.css';

interface TodoItemProps {
  todo: ClientTodo;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onEdit }: TodoItemProps) => {
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [isOpenToast, setIsOpenToast] = useState(false);

  return (
    <>
      <CheckboxGroup.Item>
        <TodoToggle
          id={todo.id}
          isChecked={todo.isChecked}
          onToggle={onToggle}
        />
        <Dialog.Trigger className={styles.todoDescriptionContainer}>
          <CheckboxGroup.Description>
            <div className={styles.todoDescriptionContentWrapper}>
              <div>{todo.title}</div>
              <div className={styles.todoDescriptionContent}>
                {todo.content}
              </div>
            </div>
          </CheckboxGroup.Description>
        </Dialog.Trigger>

        <div className={styles.contextButtonContainer}>
          <button
            className={styles.contextButton}
            onClick={() => onEdit(todo.id)}
          >
            <Pencil1Icon />
          </button>

          <Popover.Root
            open={openPopoverId === todo.id}
            onOpenChange={(open) => setOpenPopoverId(open ? todo.id : null)}
          >
            <Popover.Trigger className={styles.contextButton}>
              <DotsHorizontalIcon />
            </Popover.Trigger>
            <Popover.Content className={styles.contextContent}>
              <DeleteTodo
                onClose={() => {
                  setOpenPopoverId(null);
                  setIsOpenToast(true);
                }}
                todoId={todo.id}
              />
            </Popover.Content>
          </Popover.Root>
        </div>
      </CheckboxGroup.Item>

      <Toast.Root
        open={isOpenToast}
        onOpenChange={setIsOpenToast}
        duration={1300}
      >
        <Toast.Title>작업이 삭제되었습니다.</Toast.Title>
      </Toast.Root>
    </>
  );
};
