import { TodoFilters } from '@entities/todo/model';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const defaultFilters: TodoFilters = {
  sort: 'createdAt',
  order: 'desc',
};

export const useTodoFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useMemo(
    (): TodoFilters => ({
      sort:
        (searchParams.get('sort') as TodoFilters['sort']) ||
        defaultFilters.sort,
      order:
        (searchParams.get('order') as TodoFilters['order']) ||
        defaultFilters.order,
      priorityFilter:
        (searchParams.get('priorityFilter') as TodoFilters['priorityFilter']) ||
        undefined,
      keyword: searchParams.get('keyword') || undefined,
      countOnly: searchParams.get('countOnly') === 'true',
    }),
    [searchParams],
  );

  const updateFilters = useCallback(
    (updates: Partial<TodoFilters>) => {
      const newParams = new URLSearchParams(searchParams);

      Object.entries(updates).forEach(([key, value]) => {
        if (
          value === undefined ||
          value === '' ||
          value === defaultFilters[key as keyof TodoFilters]
        ) {
          newParams.delete(key);
        } else if (typeof value === 'boolean') {
          value ? newParams.set(key, 'true') : newParams.delete(key);
        } else {
          newParams.set(key, String(value));
        }
      });

      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  return {
    filters,
    updateFilters,
    resetFilters: useCallback(
      () => setSearchParams(new URLSearchParams()),
      [setSearchParams],
    ),
  };
};
