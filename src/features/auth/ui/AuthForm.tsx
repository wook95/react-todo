import * as styles from '@features/auth/ui/AuthForm.css';
import { FieldValue, useForm } from 'react-hook-form';

interface AuthFormProps {
  title: string;
  onClick: () => void;
}

interface FormData {
  email: string;
  password: string;
}

/*
 ** @TODO zod를 통해 유효성 검사
 */

export const AuthForm = ({ title, onClick }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<FormData>();
  const onSubmit = (data: FieldValue<FormData>) => {
    console.log(data);
    onClick();
    reset();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label} htmlFor="email">
          이메일
          <input
            id="email"
            className={styles.input}
            type="email"
            placeholder={emailPlaceholder}
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
        </label>
        <label className={styles.label} htmlFor="password">
          비밀번호
          <input
            id="password"
            className={styles.input}
            type="password"
            placeholder={passwordPlaceholder}
            {...register('password', {
              required: true,
              minLength: 8,
            })}
          />
        </label>
        <button disabled={!isValid || isSubmitting} className={styles.button}>
          로그인
        </button>
      </form>
      {errors?.email && <p>이메일 형식에 맞춰주세요</p>}
      {errors?.password && <p> 비밀번호 형식에 맞춰주세요 </p>}
    </div>
  );
};

const emailPlaceholder = '이메일 입력';
const passwordPlaceholder = '비밀번호 입력';
