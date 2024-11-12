import { httpClient } from '@/shared/api';
import { AxiosResponse } from 'axios';
import { CreateTodoRequest, Todo } from '../model/todo.type';

export class TodoApiService {
  static async createTodo({ title, content }: CreateTodoRequest) {
    const res = await httpClient.post<
      Todo,
      AxiosResponse<Todo>,
      CreateTodoRequest
    >('/todos', {
      title,
      content,
    });
    return res.data;
  }

  static async getTodos() {
    const res = await httpClient.get<{ data: Todo[] }>('/todos');
    return res.data.data;
  }

  static async getTodo(id: string) {
    const res = await httpClient.get<{ data: Todo }>(`/todos/${id}`);
    return res.data.data;
  }

  static async deleteTodo(id: string) {
    const res = await httpClient.delete(`/todos/${id}`);
    return res.data;
  }
}
