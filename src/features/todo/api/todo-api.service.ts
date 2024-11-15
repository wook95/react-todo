import { CreateTodoRequest, Todo, TodoFilters } from '@entities/todo/model';
import { httpClient } from '@shared/api';
import { AxiosResponse } from 'axios';
import { todoAdapter } from './todo-api.adapter';

export class TodoApiService {
  static async createTodo({ title, content }: CreateTodoRequest) {
    const res = await httpClient.post<
      { data: Todo },
      AxiosResponse<{ data: Todo }>,
      CreateTodoRequest
    >('/todos', {
      title,
      content,
    });

    return todoAdapter.toClient(res?.data?.data);
  }

  static async getTodos(filters: TodoFilters) {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        params.set(key, String(value));
      }
    });

    const res = await httpClient.get<{ data: Todo[] }>(
      `/todos?${params.toString()}`,
    );
    return todoAdapter.toClientList(res.data.data);
  }

  static async getTodo(id: string) {
    const res = await httpClient.get<{ data: Todo }>(`/todos/${id}`);
    return todoAdapter.toClient(res.data.data);
  }

  static async deleteTodo(id: string) {
    const res = await httpClient.delete(`/todos/${id}`);
    return res.data;
  }

  static async updateTodo(id: string, { title, content }: CreateTodoRequest) {
    const res = await httpClient.put<{ data: Todo }>(`/todos/${id}`, {
      title,
      content,
    });
    return res.data.data;
  }
}
