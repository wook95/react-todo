import { create, StateCreator } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface TodoCheckStore {
  checkedIds: Set<string>;
  toggleTodo: (id: string) => void;
}

const store: StateCreator<TodoCheckStore> = (set) => ({
  checkedIds: new Set(),
  toggleTodo: (id) =>
    set((state) => {
      const newCheckedIds = new Set(state.checkedIds);
      newCheckedIds.has(id) ? newCheckedIds.delete(id) : newCheckedIds.add(id);
      return { checkedIds: newCheckedIds };
    }),
});

const createStore = (store: StateCreator<TodoCheckStore>) => {
  return persist(store, {
    name: 'TODO::CHECKED',
    storage: createJSONStorage(() => localStorage, {
      // Serialize Set to Array
      replacer: (key, value) => {
        if (key === 'checkedIds') {
          return Array.from(value as Set<string>);
        }
        return value;
      },
      // Deserialize Array to Set
      reviver: (key, value) => {
        if (key === 'checkedIds') {
          return new Set(value as string[]);
        }
        return value;
      },
    }),
  });
};

export const useTodoCheckStore =
  import.meta.env.MODE === 'production'
    ? create<TodoCheckStore>()(createStore(store))
    : create<TodoCheckStore>()(devtools(createStore(store)));
