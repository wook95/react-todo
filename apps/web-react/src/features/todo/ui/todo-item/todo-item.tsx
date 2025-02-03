import { ClientTodo } from '@entities/todo/model';
import { DeleteTodo, TodoToggle } from '@features/todo/ui';
import { DotsHorizontalIcon, Pencil1Icon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import { CheckboxGroup } from '@shared/ui';
import { useState } from 'react';
import * as styles from './todo-item.css';

interface TodoItemProps {
  todo: ClientTodo;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  wrapDescription?: (description: React.ReactNode) => React.ReactNode;
}

// @TODO: wrapDescription이 최선의 방법이었을까?

export const TodoItem = ({
  todo,
  onToggle,
  onEdit,
  wrapDescription,
}: TodoItemProps) => {
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);

  const description = (
    <CheckboxGroup.Description>
      <div className={styles.todoDescriptionContentWrapper}>
        <div>{todo.title}</div>
        <div className={styles.todoDescriptionContent}>{todo.content}</div>
      </div>
    </CheckboxGroup.Description>
  );

  return (
    <>
      <CheckboxGroup.Item>
        <TodoToggle
          id={todo.id}
          isChecked={todo.isChecked}
          onToggle={onToggle}
        />

        {wrapDescription ? wrapDescription(description) : description}

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
                }}
                todoId={todo.id}
              />
            </Popover.Content>
          </Popover.Root>
        </div>
      </CheckboxGroup.Item>
    </>
  );
};
