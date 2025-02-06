import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ClientTodo, Todo } from '@/entities/todo/model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  private http = inject(HttpClient);

  public getTodos$(): Observable<ClientTodo[]> {
    return this.http.get<{ data: Todo[] }>('/todos').pipe(
      map((res) => {
        const apiTodos = res.data;

        if (!apiTodos?.length) {
          return [];
        }

        return apiTodos.map((todo) => ({
          ...todo,
          isChecked: false,
        }));
      }),
    );
  }

  public getTodo$(id: string): Observable<ClientTodo> {
    return this.http.get<{ data: Todo }>(`/todos/${id}`).pipe(
      map((res) => {
        const apiTodo = res.data;

        return {
          ...apiTodo,
          isChecked: false,
        };
      }),
    );
  }

  public createTodo$(todo: Todo): Observable<ClientTodo> {
    const { title, content, priority } = todo;
    return this.http
      .post<{ data: Todo }>('/todos', {
        title,
        content,
        priority,
      })
      .pipe(
        map((res) => {
          const apiTodo = res.data;

          return {
            ...apiTodo,
            isChecked: false,
          };
        }),
      );
  }

  public updateTodo$(todo: Todo): Observable<ClientTodo> {
    const { id, title, content, priority } = todo;
    console.log('updateTodo', todo);
    return this.http
      .put<{ data: Todo }>(`/todos/${id}`, { title, content, priority })
      .pipe(
        map((res) => {
          const apiTodo = res.data;

          return {
            ...apiTodo,
            isChecked: false,
          };
        }),
      );
  }

  public deleteTodo$(id: string): Observable<{ data: null }> {
    return this.http.delete<{ data: null }>(`/todos/${id}`);
  }
}
