import { Component, input, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { ClientTodo, TodoPriority } from '../../model';

@Component({
  selector: 'app-todo-item-form',
  imports: [HlmButtonDirective, HlmInputDirective, ReactiveFormsModule],
  templateUrl: './todo-item-form.component.html',
  styleUrl: './todo-item-form.component.scss',
})
export class TodoItemFormComponent {
  public todo = input<ClientTodo>();
  public create = output<ClientTodo>();

  public form = new FormGroup<{
    title: FormControl<string>;
    content: FormControl<string>;
  }>({
    title: new FormControl(this.todo()?.title || '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    content: new FormControl(this.todo()?.content || '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.create.emit({
      title: this.form.value.title || '',
      content: this.form.value.content || '',
      priority: TodoPriority.NORMAL,
      isChecked: false,
      id: this.todo()?.id || '',
      createdAt: '',
      updatedAt: new Date().toISOString(),
    });
  }
}
