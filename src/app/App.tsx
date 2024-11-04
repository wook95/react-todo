import { light } from '@/shared/ui/styles/theme.css';
import '@shared/ui/styles/global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/AppRouter';
import { queryClient } from './providers/queryClient';

/*
 * @TODO: 다크모드
 * @TODO: i18n
 */
const App = () => {
  return (
    <div className={light}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
