import * as styles from './error-fallback.css';

interface ErrorFallbackProps {
  error: Error;
  message?: string;
}

export function ErrorFallback({
  error,
  message = '문제가 발생했습니다',
}: ErrorFallbackProps) {
  return (
    <div className={styles.errorContainer}>
      <h2>{message}</h2>
      {import.meta.env.MODE !== 'production' && <pre>{error.message}</pre>}
      <a href="/" className={styles.resetButton}>
        홈으로 돌아가기
      </a>
    </div>
  );
}
