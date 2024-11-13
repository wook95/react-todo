import { CreateTodoRequest, Todo } from '@/features/todo/model/todo.type';
import { httpClient } from '@/shared/api';
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

  static async getTodos() {
    const res = await httpClient.get<{ data: Todo[] }>('/todos');
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
