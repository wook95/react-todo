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

// todo: index 정리, 파일 이름 정리
