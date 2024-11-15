import { CheckboxGroup } from '@/shared/ui';
import { useEffect, useState } from 'react';

import { TodoItem } from '@/entities/todo/ui';
import { TodoDetailDialog, TodoEditForm } from '@/features/todo/ui';
import { CreateTodoRequest, useTodoStore } from '@entities/todo/model';
import { TodoApiService } from '@features/todo/api';
import { useTodoFilters } from '@features/todo/lib';
import { TodoFilters } from '@features/todo/ui';
import * as Dialog from '@radix-ui/react-dialog';
import * as styles from './todo-list.css.ts';

export const TodoList = () => {
  const { todos, setTodos, toggleTodo, updateTodo } = useTodoStore(
    (state) => state,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { filters } = useTodoFilters();

  const editTodo = async (id: string, updatedTodo: CreateTodoRequest) => {
    const updatedTodos = await TodoApiService.updateTodo(id, updatedTodo);
    updateTodo(id, updatedTodos);
  };

  const fetchTodos = async () => {
    setIsLoading(true);

    try {
      const serverTodos = await TodoApiService.getTodos(filters);
      const mergedTodos = serverTodos.map((serverTodo) => ({
        ...serverTodo,
        isChecked: Boolean(
          todos.find((todo) => todo.id === serverTodo.id)?.isChecked,
        ),
      }));

      setTodos(mergedTodos);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!todos?.length) {
    return (
      <div>
        <TodoFilters />
        <div>작업을 추가하세요</div>
      </div>
    );
  }

  return (
    <div>
      <TodoFilters />
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
