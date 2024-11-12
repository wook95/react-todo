import '@shared/ui/styles/global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/AppRouter';
import { queryClient } from './providers/queryClient';
import { GlobalThemeProvider } from './providers/ThemeProvider';
import { ToastProvider } from './providers/toast-provider';

/*
 * @TODO: 다크모드
 * @TODO: i18n
 */
const App = () => {
  return (
    <GlobalThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </QueryClientProvider>
    </GlobalThemeProvider>
  );
};

export default App;
