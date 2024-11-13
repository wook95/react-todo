import { Toast } from '@/shared/ui';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';
import { FieldValue, useForm } from 'react-hook-form';
import { TodoApiService } from '../../api/todo-api.service';
import { useTodoStore } from '../../model/todo.store';
import { CreateTodoRequest } from '../../model/todo.type';
import * as styles from './TodoCreatePopover.css';

export const TodoCreatePopover = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<CreateTodoRequest>();
  const { addTodo } = useTodoStore((state) => state);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = handleSubmit(async (data: FieldValue<CreateTodoRequest>) => {
    const todo = await TodoApiService.createTodo(data as CreateTodoRequest);
    addTodo(todo);
    reset();
    setIsOpenToast(true);
    setIsOpen(false);
  });

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      reset();
    }
  };

  return (
    <>
      <Popover.Root open={isOpen} onOpenChange={handleOpenChange}>
        <Popover.Trigger className={styles.menuButton}>
          <div className={styles.menuItemPlus}>
            <PlusCircledIcon className={styles.menuItemIcon} />
            <span>작업추가</span>
          </div>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className={styles.popoverContent}
            sideOffset={5}
            align="start"
          >
            <form className={styles.form} onSubmit={onSubmit}>
              <input
                className={styles.titleInput}
                type="text"
                placeholder="작업 이름"
                {...register('title', { required: true })}
              />
              <input
                className={styles.contentInput}
                type="text"
                placeholder="설명"
                {...register('content')}
              />
              <div className={styles.submitButtonContainer}>
                <Popover.Close className={styles.cancelButton}>
                  취소
                </Popover.Close>
                <button
                  className={styles.submitButton}
                  type="submit"
                  disabled={!isValid || isSubmitting}
                >
                  작업 추가
                </button>
              </div>
            </form>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

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
