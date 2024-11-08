import * as Popover from '@radix-ui/react-popover';
import { FieldValue, useForm } from 'react-hook-form';
import { TodoApiService } from '../../api/todo-api.service';
import { CreateTodoRequest } from '../../model/todo.type';
import * as styles from './TodoCreatePopover.css';

export const TodoCreatePopover = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<CreateTodoRequest>();

  const onSubmit = handleSubmit((data: FieldValue<CreateTodoRequest>) => {
    console.log(data);
    TodoApiService.createTodo(data as CreateTodoRequest);
    reset();
  });

  return (
    <Popover.Portal>
      <Popover.Content
        className={styles.popoverContent}
        sideOffset={5}
        align="end"
      >
        <form className={styles.form} onSubmit={onSubmit}>
          <input type="text" placeholder="작업 이름" {...register('title')} />
          <input type="text" placeholder="설명" {...register('content')} />
          <button type="submit" disabled={!isValid || isSubmitting}>
            작업 추가
          </button>
        </form>
      </Popover.Content>
    </Popover.Portal>
  );
};
