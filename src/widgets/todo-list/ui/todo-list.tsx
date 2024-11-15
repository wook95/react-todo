import { CheckboxGroup } from '@/shared/ui';
import { useEffect, useState } from 'react';

import { TodoItem } from '@/entities/todo/ui';
import { TodoDetailDialog, TodoEditForm } from '@/features/todo/ui';
import { CreateTodoRequest, useTodoStore } from '@entities/todo/model';
import { TodoApiService } from '@features/todo/api';
import * as Dialog from '@radix-ui/react-dialog';
import * as styles from './todo-list.css.ts';

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!todos?.length) {
    return <div>작업을 추가하세요</div>;
  }

  return (
    <div>
      <CheckboxGroup.Root>
        {todos?.map((todo) => {
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
                wrapDescription={(description) => (
                  <Dialog.Trigger className={styles.todoDescriptionContainer}>
                    {description}
                  </Dialog.Trigger>
                )}
              />
              <TodoDetailDialog todo={todo} onToggle={toggleTodo} />
            </Dialog.Root>
          );
        })}
      </CheckboxGroup.Root>
    </div>
  );
};
