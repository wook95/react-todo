import { Component, inject, OnInit, signal } from '@angular/core';
import { InboxSidebarComponent } from '@/widgets/inbox-sidebar/ui';
import { TodoApiService } from '@/entities/todo/api';
import { ClientTodo } from '@/entities/todo/model';
import { TodoItemComponent } from '@/entities/todo/ui';
import { TodoItemFormComponent } from '../../../entities/todo/ui/todo-item-form/todo-item-form.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-inbox',
  imports: [
    InboxSidebarComponent,
    TodoItemComponent,
    TodoItemFormComponent,
    HlmButtonDirective,
  ],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss',
})
export class InboxComponent implements OnInit {
  private todoApiService = inject(TodoApiService);

  public todos = signal<ClientTodo[]>([]);
  public isCreating = signal(false);
  public editingTodo = signal<ClientTodo | undefined>(undefined);

  ngOnInit(): void {
    this.todoApiService.getTodos$().subscribe((res) => {
      console.log(res);
      this.todos.set(res);
    });
  }

  public deleteTodo(id: string) {
    this.todoApiService.deleteTodo$(id).subscribe(() => {
      this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
    });
  }

  public updateTodo(todo: ClientTodo) {
    this.todoApiService.updateTodo$(todo).subscribe((res) => {
      console.log('updateTodo', todo);
      this.todos.update((todos) =>
        todos.map((t) =>
          t.id === res.id ? { ...res, isChecked: t.isChecked } : t,
        ),
      );
    });
  }

  public createTodo(todo: ClientTodo) {
    console.log('createTodo', todo);

    this.todoApiService.createTodo$(todo).subscribe((res) => {
      this.stopCreating();

      this.todos.update((todos) => [...todos, res]);
    });
  }

  public startCreating() {
    this.isCreating.set(true);
  }

  public stopCreating() {
    this.isCreating.set(false);
  }

  public startEditing(todo: ClientTodo) {
    this.editingTodo.set(todo);
  }

  public stopEditing() {
    this.editingTodo.set(undefined);
  }
}
