import { TodoFilters as TodoFiltersType } from '@entities/todo/model';
import { useTodoFilters } from '@features/todo/lib';
import * as styles from './todo-filters.css';

export const TodoFilters = () => {
  const { filters, updateFilters } = useTodoFilters();

  return (
    <div className={styles.filters}>
      <select
        value={filters.priorityFilter}
        onChange={(e) => {
          updateFilters({
            priorityFilter: e.target.value as TodoFiltersType['priorityFilter'],
          });
        }}
      >
        <option value={''}>전체</option>
        <option value="urgent">긴급</option>
        <option value="normal">보통</option>
        <option value="low">낮음</option>
      </select>

      <input
        type="search"
        value={filters.keyword || ''}
        onChange={(e) =>
          updateFilters({
            keyword: e.target.value || undefined,
          })
        }
        placeholder="제목 또는 내용으로 검색"
      />

      <select
        value={`${filters.sort}_${filters.order}`}
        onChange={(e) => {
          const value = e.target.value;
          const [sort, order] = value.split('_');
          updateFilters({
            sort: sort as TodoFiltersType['sort'],
            order: order as TodoFiltersType['order'],
          });
        }}
      >
        <option value="createdAt_desc">생성일 최신순</option>
        <option value="createdAt_asc">생성일 오래된순</option>
        <option value="updatedAt_desc">수정일 최신순</option>
        <option value="updatedAt_asc">수정일 오래된순</option>
        <option value="priority_desc">우선순위 높은순</option>
        <option value="priority_asc">우선순위 낮은순</option>
      </select>
    </div>
  );
};
