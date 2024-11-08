import { Sidebar } from '@/widgets/sidebar';
import * as styles from '@pages/inbox/ui/Inbox.css';

const Inbox = () => {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div>메일함</div>
    </div>
  );
};

export default Inbox;

// todo: 토글그룹 팝오버 다이얼로그 만들기
// todo: index 정리, 파일 이름 정리
