import { httpClient } from '@/shared/api';
import { AxiosResponse } from 'axios';
import { CreateTodoRequest, CreateTodoResponse } from '../model/todo.type';

export class TodoApiService {
  static async createTodo({ title, content }: CreateTodoRequest) {
    const res = await httpClient.post<
      CreateTodoResponse,
      AxiosResponse<CreateTodoResponse>,
      CreateTodoRequest
    >('/todos', {
      title,
      content,
    });
    return res.data;
  }
}
