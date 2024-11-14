import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ClientTodo, Todo } from './todo.type';

interface TodoStore {
  todos: ClientTodo[];
  setTodos: (todos: ClientTodo[]) => void;
  addTodo: (todo: ClientTodo) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, todo: Todo) => void;
}

const store: StateCreator<TodoStore> = (set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo,
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  updateTodo: (id, { title, content, updatedAt }) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title, content, updatedAt } : todo,
      ),
    })),
});

const createStore = (store: StateCreator<TodoStore>) => {
  return persist(store, {
    name: 'todo-store',
  });
};

export const useTodoStore =
  import.meta.env.MODE === 'production'
    ? create<TodoStore>()(createStore(store))
    : create<TodoStore>()(devtools(createStore(store)));
