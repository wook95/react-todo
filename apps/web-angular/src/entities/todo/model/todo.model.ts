export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  priority: TodoPriority;
}

export interface ClientTodo extends Todo {
  isChecked: boolean;
}

export enum TodoPriority {
  URGENT = 'URGENT',
  NORMAL = 'NORMAL',
  LOW = 'LOW',
}

export enum TodoSort {
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  PRIORITY = 'priority',
}

export enum TodoOrder {
  ASC = 'asc',
  DESC = 'desc',
}
