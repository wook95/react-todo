import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { CreateTodoRequest } from '../../model/todo.type';
import * as styles from './todo-edit-form.css';

interface TodoEditFormProps {
  todo: {
    id: string;
    title: string;
    content: string;
  };
  onSubmit: (data: CreateTodoRequest) => void;
  onCancel: () => void;
}

export const TodoEditForm = ({
  todo,
  onSubmit,
  onCancel,
}: TodoEditFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting, isDirty },
  } = useForm<CreateTodoRequest>({
    defaultValues: {
      title: todo.title,
      content: todo.content,
    },
  });
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.titleInput}
        type="text"
        placeholder="작업 이름"
        {...register('title', { required: true })}
        ref={titleInputRef}
      />
      <input
        className={styles.contentInput}
        type="text"
        placeholder="설명"
        {...register('content')}
      />
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={onCancel}
          className={styles.cancelButton}
        >
          취소
        </button>
        <button
          type="submit"
          disabled={!isValid || isSubmitting || !isDirty}
          className={styles.submitButton}
        >
          수정
        </button>
      </div>
    </form>
  );
};