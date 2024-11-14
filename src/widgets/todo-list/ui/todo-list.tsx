import { CheckboxGroup } from '@/shared/ui';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

import { TodoItem } from '@/entities/todo/ui/todo-item/todo-item';
import { CreateTodoRequest, useTodoStore } from '@entities/todo/model';
import { TodoApiService } from '@features/todo/api';
import { TodoEditForm, TodoToggle } from '@features/todo/ui';
import * as Dialog from '@radix-ui/react-dialog';
import { formatDate } from '@shared/lib';
import * as styles from './todo-list.css';

// @TODO: 추후 엔티티로 분리 등  폴더 정리 필요
export const TodoList = () => {
  const { todos, setTodos, toggleTodo, updateTodo } = useTodoStore(
    (state) => state,
  );
  const [isLoading, setIsLoading] = useState(false);

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
                <Dialog.Root key={todo.id}>
                  <TodoItem
                    todo={todo}
                    onToggle={toggleTodo}
                    onEdit={() => setEditingId(todo.id)}
                  />

                  {/* dialog - detail */}

                  <Dialog.Portal>
                    <Dialog.Overlay className={styles.dialogOverlay} />
                    <Dialog.Content className={styles.dialogContentContainer}>
                      <div className={styles.dialogContent}>
                        <div className={styles.dialogHeader}>
                          <Dialog.Close className={styles.dialogCloseButton}>
                            <Cross1Icon />
                          </Dialog.Close>
                        </div>

                        <div className={styles.dialogContentBody}>
                          <div className={styles.dialogContentBodyContent}>
                            <TodoToggle
                              className={styles.detailCheckbox}
                              id={todo.id}
                              isChecked={todo.isChecked}
                              onToggle={toggleTodo}
                            />
                            <div>
                              <Dialog.Title className={styles.dialogTitle}>
                                {todo.title}
                              </Dialog.Title>
                              <Dialog.Description
                                className={styles.dialogDescription}
                              >
                                {todo.content}
                              </Dialog.Description>
                            </div>
                          </div>

                          <div className={styles.dialogContentBodySideBar}>
                            <div className={styles.sideBarSection}>
                              <div className={styles.sideBarTitle}>생성일</div>
                              <div className={styles.sideBarContent}>
                                {formatDate(todo.createdAt)}
                              </div>
                            </div>

                            <div className={styles.sideBarSection}>
                              <div className={styles.sideBarTitle}>수정일</div>
                              <div className={styles.sideBarContent}>
                                {formatDate(todo.updatedAt)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              );
            })
          ) : (
            <div>작업을 추가하세요</div>
          )}
        </CheckboxGroup.Root>
      )}
    </div>
  );
};
