import { Toast } from '@/shared/ui';
import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';
import { FieldValue, useForm } from 'react-hook-form';
import { TodoApiService } from '../../api/todo-api.service';
import { useTodoStore } from '../../model/todo.store';
import { CreateTodoRequest } from '../../model/todo.type';
import * as styles from './TodoCreatePopover.css';

export const TodoCreatePopover = ({ onClose }: { onClose: () => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<CreateTodoRequest>();
  const { addTodo } = useTodoStore((state) => state);
  const [isOpenToast, setIsOpenToast] = useState(false);

  const onSubmit = handleSubmit(async (data: FieldValue<CreateTodoRequest>) => {
    const todo = await TodoApiService.createTodo(data as CreateTodoRequest);
    addTodo(todo);
    reset();
    setIsOpenToast(true);
    onClose();
  });

  return (
    <>
      <Popover.Portal>
        <Popover.Content
          className={styles.popoverContent}
          sideOffset={5}
          align="start"
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
      <Toast.Root
        open={isOpenToast}
        onOpenChange={setIsOpenToast}
        duration={1300}
      >
        <Toast.Title>작업이 추가되었습니다.</Toast.Title>
      </Toast.Root>
    </>
  );
};
