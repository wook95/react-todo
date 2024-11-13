import { Link } from 'react-router-dom';
import * as styles from './not-found.css';

export const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <p>페이지를 찾을 수 없습니다</p>
      <Link to="/" className={styles.link}>
        홈으로 돌아가기
      </Link>
    </div>
  );
};
