import { TodoApiService } from '@/features/todo/api';
import { queryOptions } from '@tanstack/react-query';
import { CreateTodoRequest, TodoFilters } from '../model';

export const todoQueries = {
  all: () => ['todos'] as const,
  lists: () => [...todoQueries.all(), 'lists'] as const,
  list: (filters: TodoFilters) =>
    queryOptions({
      queryKey: [...todoQueries.lists(), filters],
      queryFn: () => TodoApiService.getTodos(filters),
    }),
  details: () => [...todoQueries.all(), 'detail'] as const,
  detail: (id: string) =>
    queryOptions({
      queryKey: [...todoQueries.details(), id],
      queryFn: () => TodoApiService.getTodo(id),
      staleTime: 5000,
    }),
};

export const todoMutations = {
  create: () => ({
    mutationFn: (data: CreateTodoRequest) => TodoApiService.createTodo(data),
  }),
  update: () => ({
    mutationFn: ({ id, data }: { id: string; data: CreateTodoRequest }) =>
      TodoApiService.updateTodo(id, data),
  }),
  delete: () => ({ mutationFn: (id: string) => TodoApiService.deleteTodo(id) }),
};
