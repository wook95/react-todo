export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClientTodo extends Todo {
  isChecked: boolean;
}

export interface CreateTodoRequest {
  title: string;
  content: string;
}

export interface TodoFilters {
  sort?: 'createdAt' | 'updatedAt' | 'priority';
  order?: 'asc' | 'desc';
  priorityFilter?: 'urgent' | 'normal' | 'low';
  keyword?: string;
  countOnly?: boolean;
}
