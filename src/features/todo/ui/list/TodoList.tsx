import { CheckboxGroup, Toast } from '@/shared/ui';
import { DotsHorizontalIcon, Pencil1Icon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

import { DeleteTodo, TodoEditForm } from '@features/todo/ui';
import * as Popover from '@radix-ui/react-popover';
import { TodoApiService } from '../../api/todo-api.service';
import { useTodoStore } from '../../model/todo.store';
import { CreateTodoRequest } from '../../model/todo.type';
import * as styles from './TodoList.css';

// TODO: 추후 엔티티로 분리 등  폴더 정리 필요
export const TodoList = () => {
  const { todos, setTodos, toggleTodo, updateTodo } = useTodoStore(
    (state) => state,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null); // 수정 중인 아이템 ID

  const editTodo = async (id: string, updatedTodo: CreateTodoRequest) => {
    const updatedTodos = await TodoApiService.updateTodo(id, updatedTodo);
    updateTodo(id, updatedTodos);
  };

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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CheckboxGroup.Root>
          {todos.length > 0 ? (
            todos?.map((todo) => {
              if (editingId === todo.id) {
                return (
                  <TodoEditForm
                    key={todo.id}
                    todo={todo}
                    onSubmit={(updatedTodo) => {
                      editTodo(todo.id, updatedTodo);
                      setEditingId(null);
                    }}
                    onCancel={() => setEditingId(null)}
                  />
                );
              }

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

                    <div className={styles.contextButtonContainer}>
                      <button
                        className={styles.contextButton}
                        onClick={() => setEditingId(todo.id)}
                      >
                        <Pencil1Icon />
                      </button>

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
                    </div>
                  </CheckboxGroup.Description>
                </CheckboxGroup.Item>
              );
            })
          ) : (
            <div>작업을 추가하세요</div>
          )}
        </CheckboxGroup.Root>
      )}

      <Toast.Root
        open={isOpenToast}
        onOpenChange={setIsOpenToast}
        duration={1300}
      >
        <Toast.Title>작업이 삭제되었습니다.</Toast.Title>
      </Toast.Root>
    </div>
  );
};
