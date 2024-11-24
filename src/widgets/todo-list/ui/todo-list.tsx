import * as Dialog from '@radix-ui/react-dialog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { Todo, useTodoCheckStore } from '@entities/todo/model';
import { todoMutations, todoQueries } from '@features/todo/api';
import { useTodoFilters } from '@features/todo/lib';
import {
  TodoDetailDialog,
  TodoEditForm,
  TodoFilters,
  TodoItem,
} from '@features/todo/ui';
import { CheckboxGroup } from '@shared/ui';
import * as styles from './todo-list.css.ts';

export const TodoList = () => {
  const queryClient = useQueryClient();
  const { toggleTodo, checkedIds } = useTodoCheckStore((state) => state);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { filters } = useTodoFilters();
  const { data: todos, isLoading } = useQuery({
    ...todoQueries.list(filters),
    select: (data) =>
      data.map((todo) => ({
        ...todo,
        isChecked: checkedIds.has(todo.id),
      })),
  });

  const { mutate } = useMutation({
    ...todoMutations.update(),
    onSuccess: (updatedTodo) => {
      queryClient.setQueryData(todoQueries.lists(), (old: Todo[] = []) =>
        old.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
      );
      queryClient.invalidateQueries({ queryKey: todoQueries.lists() });
    },
    onError: (error) => {
      console.log(error);
    },
  });

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
