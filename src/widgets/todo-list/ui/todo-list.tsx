import { CheckboxGroup } from '@/shared/ui';
import { useEffect, useState } from 'react';

import { todoMutations, todoQueries } from '@/entities/todo/api';
import { TodoItem } from '@/entities/todo/ui';
import { TodoDetailDialog, TodoEditForm } from '@/features/todo/ui';
import { Todo, useTodoStore } from '@entities/todo/model';
import { useTodoFilters } from '@features/todo/lib';
import { TodoFilters } from '@features/todo/ui';
import * as Dialog from '@radix-ui/react-dialog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as styles from './todo-list.css.ts';

export const TodoList = () => {
  const queryClient = useQueryClient();
  const { todos, setTodos, toggleTodo, updateTodo } = useTodoStore(
    (state) => state,
  );
  const [editingId, setEditingId] = useState<string | null>(null);
  const { filters } = useTodoFilters();
  const { data, isLoading } = useQuery({
    ...todoQueries.list(filters),
  });

  const { mutate } = useMutation({
    ...todoMutations.update(),
    onSuccess: (updatedTodo) => {
      updateTodo(updatedTodo.id, updatedTodo);
      queryClient.invalidateQueries({
        queryKey: todoQueries.lists(),
      });
      queryClient.setQueryData(todoQueries.lists(), (old: Todo[] = []) =>
        old.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
      );
    },
  });

  useEffect(() => {
    if (data) {
      const mergedTodos = data.map((serverTodo) => ({
        ...serverTodo,
        isChecked: Boolean(
          todos.find((t) => t.id === serverTodo.id)?.isChecked,
        ),
      }));
      setTodos(mergedTodos);
    }
  }, [data]);

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
                  mutate({ id: todo.id, data: updatedTodo });
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
