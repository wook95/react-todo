import { ClientTodo } from '@entities/todo/model';
import { TodoToggle } from '@features/todo/ui';
import { formatDate } from '@shared/lib';
import * as styles from './todo-detail.css.ts';

interface TodoDetailProps {
  todo: ClientTodo;
  onToggle: (id: string) => void;
}

export const TodoDetail = ({ todo, onToggle }: TodoDetailProps) => {
  return (
    <div className={styles.dialogContentBody}>
      <div className={styles.dialogContentBodyContent}>
        <TodoToggle
          className={styles.detailCheckbox}
          id={todo.id}
          isChecked={todo.isChecked}
          onToggle={onToggle}
        />
        <div>
          <h2 className={styles.dialogTitle}>{todo.title}</h2>
          <p className={styles.dialogDescription}>{todo.content}</p>
        </div>
      </div>

      <div className={styles.dialogContentBodySideBar}>
        <div className={styles.sideBarSection}>
          <div className={styles.sideBarTitle}>생성일</div>
          <div className={styles.sideBarContent}>
            {formatDate(todo.createdAt)}
          </div>
        </div>

        <div className={styles.sideBarSection}>
          <div className={styles.sideBarTitle}>수정일</div>
          <div className={styles.sideBarContent}>
            {formatDate(todo.updatedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};
