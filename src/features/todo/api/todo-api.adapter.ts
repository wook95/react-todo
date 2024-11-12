import { Todo as ApiTodo, ClientTodo } from '../model/todo.type';

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
