import { CheckboxGroup, Toast } from '@/shared/ui';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

import { DeleteTodo } from '@features/todo/ui';
import * as Popover from '@radix-ui/react-popover';
import { TodoApiService } from '../../api/todo-api.service';
import { useTodoStore } from '../../model/todo.store';
import * as styles from './TodoList.css';

// TODO: 추후 엔티티로 분리 등  폴더 정리 필요
export const TodoList = () => {
  const { todos, setTodos, toggleTodo } = useTodoStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [isOpenToast, setIsOpenToast] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      if (todos.length > 0) {
        return;
      }
      setIsLoading(true);

      try {
        const todos = await TodoApiService.getTodos();
        setTodos(todos);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <h4>Todo List</h4>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CheckboxGroup.Root>
          {todos?.map((todo) => {
            return (
              <CheckboxGroup.Item key={todo.id}>
                <CheckboxGroup.Input
                  checked={todo.isChecked}
                  onChange={() => toggleTodo(todo.id)}
                />
                <CheckboxGroup.Description
                  className={styles.todoDescriptionContainer}
                >
                  <div className={styles.todoDescriptionContentWrapper}>
                    <div>{todo.title}</div>
                    <div className={styles.todoDescriptionContent}>
                      {todo.content}
                    </div>
                  </div>

                  <Popover.Root
                    open={openPopoverId === todo.id}
                    onOpenChange={(open) =>
                      setOpenPopoverId(open ? todo.id : null)
                    }
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
                </CheckboxGroup.Description>
              </CheckboxGroup.Item>
            );
          })}
        </CheckboxGroup.Root>
      )}

      <Toast.Root
        open={isOpenToast}
        onOpenChange={setIsOpenToast}
        duration={1300}
      >
        <Toast.Title>작업이 추가되었습니다.</Toast.Title>
      </Toast.Root>
    </div>
  );
};
