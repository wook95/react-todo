export interface CreateTodoRequest {
  title: string;
  content: string;
}

export interface CreateTodoResponse {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}
