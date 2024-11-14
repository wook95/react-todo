import { Todo as ApiTodo, ClientTodo } from '@entities/todo/model';

export const todoAdapter = {
  toClient(apiTodo: ApiTodo): ClientTodo {
    return {
      ...apiTodo,
      isChecked: false,
    };
  },

  toClientList(apiTodos: ApiTodo[]): ClientTodo[] {
    return apiTodos.map(this.toClient);
  },
};
