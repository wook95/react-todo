import {
  CreateTodoRequest,
  createTodoSchema,
  Todo,
} from '@entities/todo/model';
import { todoMutations, todoQueries } from '@features/todo/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import { Toast } from '@shared/ui';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { FieldValue, useForm } from 'react-hook-form';
import * as styles from './todo-create-popover.css';

export const TodoCreatePopover = () => {
  const queryClient = useQueryClient();
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CreateTodoRequest>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const { mutate, isPending } = useMutation({
    ...todoMutations.create(),
    onSuccess: (newTodo: Todo) => {
      queryClient.setQueryData(todoQueries.lists(), (old: Todo[] = []) => [
        ...old,
        { ...newTodo, isChecked: false },
      ]);
      queryClient.invalidateQueries({ queryKey: todoQueries.lists() });

      reset();
      setIsOpenToast(true);
      setIsOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = handleSubmit(async (data: FieldValue<CreateTodoRequest>) => {
    mutate(data as CreateTodoRequest);
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
                {...register('title')}
              />
              {errors.title && (
                <span className={styles.errorMessage}>
                  {errors.title.message}
                </span>
              )}
              <input
                className={styles.contentInput}
                type="text"
                placeholder="설명"
                {...register('content')}
              />
              {errors.content && (
                <span className={styles.errorMessage}>
                  {errors.content.message}
                </span>
              )}
              <div className={styles.submitButtonContainer}>
                <Popover.Close className={styles.cancelButton}>
                  취소
                </Popover.Close>
                <button
                  className={styles.submitButton}
                  type="submit"
                  disabled={isSubmitting || !isValid}
                >
                  {isPending ? '추가중...' : '작업 추가'}
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
