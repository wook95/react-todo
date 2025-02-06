import { Component, input, output } from '@angular/core';
import { ClientTodo } from '@/entities/todo/model';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  todo = input.required<ClientTodo>();
  deleteTodo = output<void>();
  updateTodo = output<ClientTodo>();
}
